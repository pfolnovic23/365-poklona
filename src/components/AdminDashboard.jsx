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
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.titleContainer}>
          <Settings size={32} color="var(--accent)" />
          <h1 style={styles.title}>Admin Dashboard</h1>
        </div>
        <div style={styles.headerButtons}>
          <button onClick={() => setShowForm(!showForm)} style={styles.addBtn}>
            <Plus size={16} />
            {showForm ? 'Zatvori' : 'Dodaj Poklon'}
          </button>
          <button onClick={handleLogout} style={styles.logoutBtn}>
            <LogOut size={16} />
            Odjavi se
          </button>
        </div>
      </header>

      {showForm && (
        <div style={styles.formCard}>
          <h2 style={styles.formTitle}>
            {editingPresent ? 'Uredi Poklon' : 'Novi Poklon'}
          </h2>
          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Dan (1-365)</label>
              <input
                type="number"
                min="1"
                max="365"
                value={formData.day}
                onChange={(e) => setFormData({...formData, day: e.target.value})}
                style={styles.input}
                required
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Tip</label>
              <select
                value={formData.type}
                onChange={(e) => setFormData({...formData, type: e.target.value})}
                style={styles.input}
              >
                <option value="text">Tekst</option>
                <option value="image">Slika</option>
                <option value="song">Pjesma</option>
              </select>
            </div>

            {formData.type === 'song' && (
              <div style={styles.formGroup}>
                <label style={styles.label}>Naslov</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  style={styles.input}
                  placeholder="Naziv pjesme"
                />
              </div>
            )}

            <div style={styles.formGroup}>
              <label style={styles.label}>
                {formData.type === 'text' ? 'Tekst' : 'URL'}
              </label>
              <textarea
                value={formData.content}
                onChange={(e) => setFormData({...formData, content: e.target.value})}
                style={{...styles.input, minHeight: '100px'}}
                placeholder={
                  formData.type === 'text' 
                    ? 'Upiši poruku...' 
                    : 'https://...'
                }
                required
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Datum otključavanja</label>
              <input
                type="date"
                value={formData.unlockDate}
                onChange={(e) => setFormData({...formData, unlockDate: e.target.value})}
                style={styles.input}
                required
              />
            </div>

            <div style={styles.formButtons}>
              <button type="submit" style={styles.saveBtn}>
                {editingPresent ? 'Spremi' : 'Dodaj'}
              </button>
              <button type="button" onClick={resetForm} style={styles.cancelBtn}>
                Odustani
              </button>
            </div>
          </form>
        </div>
      )}

      <div style={styles.list}>
        <h2 style={styles.listTitle}>Svi Pokloni ({presents.length})</h2>
        {presents.map(present => (
          <div key={present.id} style={styles.presentCard}>
            <div style={styles.presentInfo}>
              <span style={styles.presentDay}>Dan {present.day}</span>
              <span style={styles.presentType}>{present.type}</span>
              <span style={styles.presentDate}>{present.unlockDate}</span>
              {present.opened && <span style={styles.openedBadge}>Otvoreno</span>}
            </div>
            <div style={styles.presentActions}>
              <button onClick={() => handleEdit(present)} style={styles.editBtn}>
                <Edit size={14} />
              </button>
              <button onClick={() => handleDelete(present.id)} style={styles.deleteBtn}>
                <Trash2 size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    padding: '20px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '40px',
    flexWrap: 'wrap',
    gap: '15px',
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  title: {
    color: 'var(--accent)',
    fontSize: '32px',
    fontWeight: '700',
  },
  headerButtons: {
    display: 'flex',
    gap: '12px',
  },
  addBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 20px',
    background: 'var(--accent)',
    border: 'none',
    borderRadius: '12px',
    color: 'var(--bg-primary)',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'all 0.3s ease',
  },
  logoutBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 20px',
    background: 'var(--card-bg)',
    border: '1px solid var(--card-border)',
    borderRadius: '12px',
    color: 'var(--text-primary)',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'all 0.3s ease',
  },
  formCard: {
    background: 'var(--card-bg)',
    border: '1px solid var(--card-border)',
    borderRadius: '16px',
    padding: '30px',
    marginBottom: '30px',
    maxWidth: '600px',
    boxShadow: '0 8px 32px var(--shadow)',
    backdropFilter: 'blur(10px)',
  },
  formTitle: {
    color: 'var(--accent)',
    marginBottom: '20px',
    fontSize: '24px',
    fontWeight: '600',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  label: {
    fontWeight: '500',
    color: 'var(--text-primary)',
    fontSize: '14px',
  },
  input: {
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid var(--card-border)',
    background: 'rgba(255, 255, 255, 0.05)',
    color: 'var(--text-primary)',
    fontSize: '16px',
    outline: 'none',
    transition: 'border 0.3s',
  },
  formButtons: {
    display: 'flex',
    gap: '12px',
    marginTop: '10px',
  },
  saveBtn: {
    flex: 1,
    padding: '14px',
    background: 'var(--accent)',
    color: 'var(--bg-primary)',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'transform 0.2s',
  },
  cancelBtn: {
    flex: 1,
    padding: '14px',
    background: 'transparent',
    color: 'var(--text-secondary)',
    border: '1px solid var(--card-border)',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'all 0.3s',
  },
  list: {
    background: 'var(--card-bg)',
    border: '1px solid var(--card-border)',
    borderRadius: '16px',
    padding: '30px',
    boxShadow: '0 8px 32px var(--shadow)',
    backdropFilter: 'blur(10px)',
  },
  listTitle: {
    color: 'var(--accent)',
    marginBottom: '20px',
    fontSize: '24px',
    fontWeight: '600',
  },
  presentCard: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px',
    borderBottom: '1px solid var(--card-border)',
    transition: 'background 0.3s ease',
    flexWrap: 'wrap',
    gap: '12px',
  },
  presentInfo: {
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  presentDay: {
    fontWeight: '600',
    color: 'var(--accent)',
    fontSize: '16px',
  },
  presentType: {
    padding: '4px 12px',
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '20px',
    fontSize: '12px',
    color: 'var(--text-secondary)',
    fontWeight: '500',
  },
  presentDate: {
    color: 'var(--text-secondary)',
    fontSize: '14px',
  },
  openedBadge: {
    color: 'var(--accent)',
    fontSize: '12px',
    fontWeight: '500',
  },
  presentActions: {
    display: 'flex',
    gap: '8px',
  },
  editBtn: {
    display: 'flex',
    alignItems: 'center',
    padding: '8px 12px',
    background: 'var(--accent)',
    color: 'var(--bg-primary)',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '12px',
    transition: 'transform 0.2s',
  },
  deleteBtn: {
    display: 'flex',
    alignItems: 'center',
    padding: '8px 12px',
    background: 'transparent',
    color: 'var(--text-secondary)',
    border: '1px solid var(--card-border)',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '12px',
    transition: 'all 0.3s',
  },
};

export default AdminDashboard;