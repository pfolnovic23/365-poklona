import { useState, useEffect } from 'react';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db, auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { Settings, Plus, Edit, Trash2, LogOut } from 'lucide-react';

function AdminDashboard() {
  const [presents, setPresents] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [editingPresent, setEditingPresent] = useState(null);
  
  const [formData, setFormData] = useState({
    day: '',
    type: 'text',
    title: '',
    content: '',
    unlockDate: '',
  });

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
      const presentData = {
        day: parseInt(formData.day),
        type: formData.type,
        title: formData.title,
        content: formData.content,
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

  // Allow admin to 'pack' a present again (mark as not opened and clear openedAt)
  const packPresent = async (id) => {
    if (!window.confirm('Želiš li zaista vratiti ovaj poklon u stanje "spakirano"?')) return;
    try {
      await updateDoc(doc(db, 'presents', id), { opened: false, openedAt: null });
      loadPresents();
    } catch (error) {
      console.error('Error re-packing present:', error);
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
      <div className="w-full max-w-4xl relative mt-4 sm:mt-6 mx-auto">
        {/* square offset shadow - disabled on small screens to avoid overflow */}
        <div className="absolute inset-0 md:translate-x-4 md:translate-y-4 bg-black" aria-hidden />

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

                {formData.type === 'song' && (
                  <div className="flex flex-col">
                    <label className="text-sm text-[#111827] font-medium">Naslov</label>
                    <input type="text" value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} className="mt-1 p-3 border-2 border-black bg-[#f6f4ee] text-[#111827]" placeholder="Naziv pjesme" />
                  </div>
                )}

                <div className="flex flex-col">
                  <label className="text-sm text-[#111827] font-medium">{formData.type === 'text' ? 'Tekst' : 'URL'}</label>
                  <textarea value={formData.content} onChange={(e) => setFormData({...formData, content: e.target.value})} className="mt-1 p-3 border-2 border-black bg-[#f6f4ee] text-[#111827] min-h-[100px]" placeholder={formData.type === 'text' ? 'Upiši poruku...' : 'https://...'} required />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm text-[#111827] font-medium">Datum otključavanja</label>
                  <input type="date" value={formData.unlockDate} onChange={(e) => setFormData({...formData, unlockDate: e.target.value})} className="mt-1 p-3 border-2 border-black bg-[#f6f4ee] text-[#111827]" required />
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button type="submit" className="flex-1 py-3 bg-[#111827] text-white border-2 border-black font-semibold">{editingPresent ? 'Spremi' : 'Dodaj'}</button>
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