import { useState, useEffect } from 'react';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db, auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { Settings, Plus, Edit, Trash2, LogOut } from 'lucide-react';
import { generateAllPresents, downloadPresentsAsCSV } from '../lib/generatePresents';

// Cloudinary upload function
const uploadToCloudinary = async (file) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: 'POST',
        body: formData
      }
    );

    if (!response.ok) throw new Error('Upload failed');
    const data = await response.json();
    return data.secure_url;
  } catch (error) {
    console.error('Cloudinary upload error:', error);
    return null;
  }
};

function AdminDashboard() {
  const [presents, setPresents] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [editingPresent, setEditingPresent] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    day: '',
    type: 'text',
    title: '',
    content: '',
    unlockDate: '',
  });
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    loadPresents();
  }, []);

  const loadPresents = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'presents'));
      const presentsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      presentsData.sort((a, b) => a.day - b.day);
      setPresents(presentsData);
    } catch (error) {
      console.error('Error loading presents:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      let contentValue = formData.content;

      // Upload image if file is selected and type is "image"
      if (formData.type === 'image' && imageFile) {
        setUploading(true);
        const imageUrl = await uploadToCloudinary(imageFile);
        setUploading(false);
        
        if (!imageUrl) {
          alert('Greška pri učitavanju slike');
          return;
        }
        contentValue = imageUrl;
      }

      // Validate that image type has an image
      if (formData.type === 'image' && !contentValue) {
        alert('Molimo odaberi sliku');
        return;
      }

      const presentData = {
        day: parseInt(formData.day),
        type: formData.type,
        title: formData.title,
        content: contentValue,
        unlockDate: formData.unlockDate,
        opened: false,
      };

      if (editingPresent) {
        await updateDoc(doc(db, 'presents', editingPresent.id), presentData);
      } else {
        await addDoc(collection(db, 'presents'), presentData);
      }

      resetForm();
      loadPresents();
    } catch (error) {
      console.error('Error saving present:', error);
      alert('Greška pri spremanju poklona');
    }
  };

  const handleEdit = (present) => {
    setEditingPresent(present);
    setFormData({
      day: present.day,
      type: present.type,
      title: present.title || '',
      content: present.content,
      unlockDate: present.unlockDate,
    });
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Jesi li siguran da želiš obrisati ovaj poklon?')) {
      try {
        await deleteDoc(doc(db, 'presents', id));
        loadPresents();
      } catch (error) {
        console.error('Error deleting present:', error);
      }
    }
  };

  const packPresent = async (id) => {
    if (!window.confirm('Želiš li zaista vratiti ovaj poklon u stanje "spakirano"?')) return;
    try {
      await updateDoc(doc(db, 'presents', id), { opened: false, openedAt: null });
      loadPresents();
    } catch (error) {
      console.error('Error re-packing present:', error);
    }
  };

  const handleGenerateAllPresents = async () => {
    const confirmed = window.confirm(
      '⚠️ Ovo će generisati svih 365 poklona počevši od 3.11.2025.\n\nSigurno želiš nastaviti?'
    );

    if (!confirmed) return;

    try {
      setLoading(true);
      const generatedPresents = generateAllPresents();

      let added = 0;
      for (const present of generatedPresents) {
        await addDoc(collection(db, 'presents'), present);
        added++;
      }

      alert(`✅ Svih ${added} poklona je uspješno dodano!`);
      loadPresents();
    } catch (error) {
      console.error('Error generating presents:', error);
      alert('❌ Greška pri generisanju poklona');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteAllPresents = async () => {
    const confirmed = window.confirm(
      '⚠️ PAŽNJA! Ovo će obrisati SVE poklone iz baze!\n\nOva akcija se ne može vratiti!\n\nSigurno želiš nastaviti?'
    );

    if (!confirmed) return;

    try {
      setLoading(true);
      const querySnapshot = await getDocs(collection(db, 'presents'));
      let deleted = 0;

      for (const document of querySnapshot.docs) {
        await deleteDoc(doc(db, 'presents', document.id));
        deleted++;
      }

      alert(`✅ Obrisano ${deleted} poklona`);
      loadPresents();
    } catch (error) {
      console.error('Error deleting presents:', error);
      alert('❌ Greška pri brisanju poklona');
    } finally {
      setLoading(false);
    }
  };

  const formatDateTime = (iso) => {
    if (!iso) return '';
    const d = new Date(iso);
    const pad = (n) => n.toString().padStart(2, '0');
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
  };

  const resetForm = () => {
    setFormData({
      day: '',
      type: 'text',
      title: '',
      content: '',
      unlockDate: '',
    });
    setImageFile(null);
    setEditingPresent(null);
    setShowForm(false);
  };

  const handleLogout = () => {
    signOut(auth);
  };

  // Open the form for adding a new present (clears any editing state)
  const openAddForm = () => {
    // If the form was minimized, restore it with preserved data
    if (minimized) {
      setShowForm(true);
      setMinimized(false);
      return;
    }
    setEditingPresent(null);
    setFormData({ day: '', type: 'text', title: '', content: '', unlockDate: '' });
    setShowForm(true);
    setMinimized(false);
  };

  const minimizeForm = () => {
    // hide the form but keep formData so it can be restored
    setShowForm(false);
    setMinimized(true);
  };

  const restoreForm = () => {
    setShowForm(true);
    setMinimized(false);
  };

  return (
    <div className="min-h-screen flex items-start justify-center p-4 sm:p-6 bg-[#f5f4dc]">
      <div className="w-full max-w-4xl relative mt-4 sm:mt-6">
        <div className="relative z-10 bg-[#fffdfd]/95 border-4 border-black p-4 sm:p-6">
          <header className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
            <div className="flex items-center gap-4">
              <Settings size={28} className="text-[#111827]" />
              <h1 className="text-2xl font-extrabold text-[#111827]">Admin Dashboard</h1>
            </div>

            <div className="flex items-center gap-3">
              <button onClick={openAddForm} className="flex items-center gap-2 bg-[#111827] text-white px-4 py-2 border-2 border-black">
                <Plus size={14} />
                <span className="text-sm">Dodaj Poklon</span>
              </button>
              <button onClick={handleLogout} className="flex items-center gap-2 px-4 py-2 border-2 border-black bg-[#f6f4ee] text-[#111827]">
                <LogOut size={14} />
                <span className="text-sm">Odjavi se</span>
              </button>
            </div>
          </header>

          {/* BULK ACTIONS SECTION */}
          <div className="mb-6 p-4 bg-[#f6f4ee] border-2 border-dashed border-[#111827]">
            <h3 className="text-sm font-bold text-[#111827] mb-3">Bulk Akcije:</h3>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={handleGenerateAllPresents}
                disabled={loading}
                className="py-2 px-3 text-xs sm:text-sm border-2 border-green-600 bg-green-100 text-green-800 hover:bg-green-200 transition-colors disabled:opacity-50 font-semibold"
              >
                Generiraj 365 Poklona
              </button>
              <button
                onClick={() => downloadPresentsAsCSV(presents)}
                disabled={loading || presents.length === 0}
                className="py-2 px-3 text-xs sm:text-sm border-2 border-blue-600 bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors disabled:opacity-50 font-semibold"
              >
                Preuzmi Backup (CSV)
              </button>
              <button
                onClick={handleDeleteAllPresents}
                disabled={loading}
                className="py-2 px-3 text-xs sm:text-sm border-2 border-red-600 bg-red-100 text-red-800 hover:bg-red-200 transition-colors disabled:opacity-50 font-semibold"
              >
                Obriši Sve Poklone
              </button>
            </div>
            {loading && <p className="text-xs text-[#111827] mt-2">Obrada u tijeku...</p>}
          </div>

          {showForm && (
            <div className="mb-6 relative">
              <h2 className="text-xl font-semibold text-[#111827] mb-4">{editingPresent ? 'Uredi Poklon' : 'Novi Poklon'}</h2>
              {/* Close and minimize controls for the form */}
              <div className="absolute top-0 right-0 flex gap-2">
                <button type="button" onClick={minimizeForm} title="Minimize form" className="px-3 py-1 border-2 border-black bg-[#f6f4ee]">−</button>
                <button type="button" onClick={resetForm} title="Close form" className="px-3 py-1 border-2 border-black bg-[#f6f4ee]">✕</button>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col">
                  <label className="text-sm text-[#111827] font-medium">Dan (1-365)</label>
                  <input type="number" min="1" max="365" value={formData.day} onChange={(e) => setFormData({...formData, day: e.target.value})} className="mt-1 p-3 border-2 border-black bg-[#f6f4ee] text-[#111827]" required />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm text-[#111827] font-medium">Tip</label>
                  <select value={formData.type} onChange={(e) => setFormData({...formData, type: e.target.value})} className="mt-1 p-3 border-2 border-black bg-[#f6f4ee] text-[#111827]">
                    <option value="text">Tekst</option>
                    <option value="image">Slika</option>
                    <option value="song">Pjesma</option>
                  </select>
                </div>

                {formData.type === 'image' && (
                  <div className="flex flex-col">
                    <label className="text-sm text-[#111827] font-medium">Učitaj sliku</label>
                    
                    {/* Show preview if image already exists (editing) */}
                    {editingPresent && formData.content && !imageFile && (
                      <div className="mt-2 mb-3">
                        <img 
                          src={formData.content} 
                          alt="Current" 
                          className="w-full max-h-48 object-cover border-2 border-black"
                        />
                        <p className="text-xs text-gray-600 mt-2">Trenutna slika</p>
                        <button
                          type="button"
                          onClick={() => setFormData({...formData, content: ''})}
                          className="mt-2 px-3 py-1 text-xs border-2 border-black bg-red-200 text-red-800 font-semibold"
                        >
                          Ukloni sliku
                        </button>
                      </div>
                    )}

                    {/* Show new file preview if selected */}
                    {imageFile && (
                      <div className="mt-2 mb-3">
                        <img 
                          src={URL.createObjectURL(imageFile)} 
                          alt="Preview" 
                          className="w-full max-h-48 object-cover border-2 border-black"
                        />
                        <p className="text-xs text-gray-600 mt-2">Nova slika: {imageFile.name}</p>
                        <button
                          type="button"
                          onClick={() => setImageFile(null)}
                          className="mt-2 px-3 py-1 text-xs border-2 border-black bg-gray-200 text-gray-800 font-semibold"
                        >
                          Ukloni novu sliku
                        </button>
                      </div>
                    )}

                    {/* File input */}
                    <input 
                      type="file" 
                      accept="image/*" 
                      onChange={(e) => setImageFile(e.target.files?.[0] || null)} 
                      className="mt-2 p-3 border-2 border-black bg-[#f6f4ee] text-[#111827]" 
                    />
                  </div>
                )}

                {(formData.type === 'image' || formData.type === 'song') && (
                  <div className="flex flex-col">
                    <label className="text-sm text-[#111827] font-medium">
                      {formData.type === 'image' ? 'Poruka uz sliku (opcionalno)' : 'Naslov'}
                    </label>
                    <input 
                      type="text" 
                      value={formData.title} 
                      onChange={(e) => setFormData({...formData, title: e.target.value})} 
                      className="mt-1 p-3 border-2 border-black bg-[#f6f4ee] text-[#111827]" 
                      placeholder={formData.type === 'image' ? 'Upiši poruku...' : 'Naziv pjesme'} 
                    />
                  </div>
                )}

                <div className="flex flex-col">
                  <label className="text-sm text-[#111827] font-medium">
                    {formData.type === 'text' ? 'Tekst' : formData.type === 'song' ? 'Spotify ili YouTube URL' : ''}
                  </label>
                  {formData.type !== 'image' && (
                    <textarea 
                      value={formData.content} 
                      onChange={(e) => setFormData({...formData, content: e.target.value})} 
                      className="mt-1 p-3 border-2 border-black bg-[#f6f4ee] text-[#111827] min-h-[100px]" 
                      placeholder={
                        formData.type === 'text' 
                          ? 'Upiši poruku...' 
                          : 'https://open.spotify.com/track/... ili https://youtube.com/watch?v=...'
                      } 
                      required 
                    />
                  )}
                  {formData.type === 'song' && (
                    <p className="text-xs text-gray-600 mt-2">Primjeri: Spotify track URL ili YouTube video link</p>
                  )}
                </div>

                <div className="flex flex-col">
                  <label className="text-sm text-[#111827] font-medium">Datum otključavanja</label>
                  <input type="date" value={formData.unlockDate} onChange={(e) => setFormData({...formData, unlockDate: e.target.value})} className="mt-1 p-3 border-2 border-black bg-[#f6f4ee] text-[#111827]" required />
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button type="submit" disabled={uploading} className="flex-1 py-3 bg-[#111827] text-white border-2 border-black font-semibold disabled:opacity-60">
                    {uploading ? 'Učitavanje slike...' : editingPresent ? 'Spremi' : 'Dodaj'}
                  </button>
                  <button type="button" onClick={resetForm} className="flex-1 py-3 border-2 border-black bg-[#f6f4ee] text-[#111827]">Odustani</button>
                </div>
              </form>
            </div>
          )}

          <div>
            <h2 className="text-lg font-semibold text-[#111827] mb-4">Svi Pokloni ({presents.length})</h2>
            <div className="flex flex-col gap-4">
              {presents.map(present => (
                <div key={present.id} className="p-3 sm:p-4 border-2 border-black bg-[#f6f4ee] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                    <span className="font-semibold text-[#111827]">Dan {present.day}</span>
                    <span className="text-sm text-[#111827] bg-[#fff] px-2 py-1 border-2 border-black">{present.type}</span>
                    <span className="text-sm text-[#666]">{present.unlockDate}</span>
                    {present.opened && (
                      <span className="text-sm text-[#667eea] mt-1 sm:mt-0">Otvoreno: {present.openedAt ? formatDateTime(present.openedAt) : ''}</span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 flex-wrap mt-2 sm:mt-0">
                    <button onClick={() => { handleEdit(present); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="p-2 bg-[#111827] text-white border-2 border-black"><Edit size={14} /></button>
                    <button onClick={() => handleDelete(present.id)} className="p-2 border-2 border-black bg-[#f6f4ee] text-[#111827]"><Trash2 size={14} /></button>
                    {present.opened && (
                      <button onClick={() => packPresent(present.id)} className="p-2 border-2 border-black bg-[#fff] text-[#111827]">Spakiraj</button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
  {/* SplashCursor is mounted at App root to avoid duplicates */}
    </div>
  );
}

export default AdminDashboard;