import { useState, useEffect } from 'react';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db, auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { Settings, Plus, Edit, Trash2, LogOut } from 'lucide-react';

function AdminDashboard() {
  const [presents, setPresents] = useState([]);
  const [showForm, setShowForm] = useState(false);
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

  return (
    <div className="min-h-screen p-6">
      <header className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Settings size={28} className="text-primary" />
          <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={() => setShowForm(!showForm)} className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg">
            <Plus size={14} />
            {showForm ? 'Zatvori' : 'Dodaj Poklon'}
          </button>
          <button onClick={handleLogout} className="flex items-center gap-2 glass border px-4 py-2 rounded-lg text-white">
            <LogOut size={14} />
            Odjavi se
          </button>
        </div>
      </header>

      {showForm && (
        <div className="glass border rounded-2xl p-6 mb-6 max-w-2xl">
          <h2 className="text-xl font-semibold text-primary mb-4">{editingPresent ? 'Uredi Poklon' : 'Novi Poklon'}</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label className="text-sm text-white font-medium">Dan (1-365)</label>
              <input type="number" min="1" max="365" value={formData.day} onChange={(e) => setFormData({...formData, day: e.target.value})} className="mt-1 p-3 rounded-lg bg-white/5 border border-white/10 text-white" required />
            </div>

            <div className="flex flex-col">
              <label className="text-sm text-white font-medium">Tip</label>
              <select value={formData.type} onChange={(e) => setFormData({...formData, type: e.target.value})} className="mt-1 p-3 rounded-lg bg-white/5 border border-white/10 text-white">
                <option value="text">Tekst</option>
                <option value="image">Slika</option>
                <option value="song">Pjesma</option>
              </select>
            </div>

            {formData.type === 'song' && (
              <div className="flex flex-col">
                <label className="text-sm text-white font-medium">Naslov</label>
                <input type="text" value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} className="mt-1 p-3 rounded-lg bg-white/5 border border-white/10 text-white" placeholder="Naziv pjesme" />
              </div>
            )}

            <div className="flex flex-col">
              <label className="text-sm text-white font-medium">{formData.type === 'text' ? 'Tekst' : 'URL'}</label>
              <textarea value={formData.content} onChange={(e) => setFormData({...formData, content: e.target.value})} className="mt-1 p-3 rounded-lg bg-white/5 border border-white/10 text-white min-h-[100px]" placeholder={formData.type === 'text' ? 'Upiši poruku...' : 'https://...'} required />
            </div>

            <div className="flex flex-col">
              <label className="text-sm text-white font-medium">Datum otključavanja</label>
              <input type="date" value={formData.unlockDate} onChange={(e) => setFormData({...formData, unlockDate: e.target.value})} className="mt-1 p-3 rounded-lg bg-white/5 border border-white/10 text-white" required />
            </div>

            <div className="flex gap-4">
              <button type="submit" className="flex-1 py-3 bg-primary text-white rounded-lg font-semibold">{editingPresent ? 'Spremi' : 'Dodaj'}</button>
              <button type="button" onClick={resetForm} className="flex-1 py-3 border border-white/10 rounded-lg text-white">Odustani</button>
            </div>
          </form>
        </div>
      )}

      <div className="glass border rounded-2xl p-6">
        <h2 className="text-lg text-primary font-semibold mb-4">Svi Pokloni ({presents.length})</h2>
        <div className="space-y-3">
          {presents.map(present => (
            <div key={present.id} className="flex items-center justify-between p-3 border-b border-white/6">
              <div className="flex items-center gap-4">
                <span className="font-semibold text-primary">Dan {present.day}</span>
                <span className="text-sm text-white/80 bg-white/5 px-3 py-1 rounded-full">{present.type}</span>
                <span className="text-sm text-white/60">{present.unlockDate}</span>
                {present.opened && <span className="text-sm text-primary">Otvoreno</span>}
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => handleEdit(present)} className="p-2 bg-primary text-white rounded-md"><Edit size={14} /></button>
                <button onClick={() => handleDelete(present.id)} className="p-2 border border-white/10 rounded-md text-white"><Trash2 size={14} /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;