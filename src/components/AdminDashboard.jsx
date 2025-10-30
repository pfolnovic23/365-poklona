import { useState, useEffect } from 'react';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db, auth } from '../firebase';
import { signOut } from 'firebase/auth';

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
        <h1 style={styles.title}>⚙️ Admin Dashboard</h1>
        <div style={styles.headerButtons}>
          <button onClick={() => setShowForm(!showForm)} style={styles.addBtn}>
            {showForm ? 'Zatvori' : '+ Dodaj Poklon'}
          </button>
          <button onClick={handleLogout} style={styles.logoutBtn}>
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
              {present.opened && <span style={styles.openedBadge}>✓ Otvoreno</span>}
            </div>
            <div style={styles.presentActions}>
              <button onClick={() => handleEdit(present)} style={styles.editBtn}>
                Uredi
              </button>
              <button onClick={() => handleDelete(present.id)} style={styles.deleteBtn}>
                Obriši
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
    marginBottom: '30px',
    flexWrap: 'wrap',
    gap: '10px',
  },
  title: {
    color: 'white',
    fontSize: '32px',
  },
  headerButtons: {
    display: 'flex',
    gap: '10px',
  },
  addBtn: {
    padding: '10px 20px',
    background: '#27ae60',
    border: 'none',
    borderRadius: '10px',
    color: 'white',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  logoutBtn: {
    padding: '10px 20px',
    background: 'rgba(255,255,255,0.2)',
    border: '2px solid white',
    borderRadius: '10px',
    color: 'white',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  formCard: {
    background: 'white',
    borderRadius: '15px',
    padding: '30px',
    marginBottom: '30px',
    maxWidth: '600px',
  },
  formTitle: {
    color: '#667eea',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
  },
  label: {
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    padding: '10px',
    borderRadius: '8px',
    border: '2px solid #e0e0e0',
    fontSize: '16px',
    outline: 'none',
  },
  formButtons: {
    display: 'flex',
    gap: '10px',
    marginTop: '10px',
  },
  saveBtn: {
    flex: 1,
    padding: '12px',
    background: '#667eea',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  cancelBtn: {
    flex: 1,
    padding: '12px',
    background: '#e0e0e0',
    color: '#333',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  list: {
    background: 'white',
    borderRadius: '15px',
    padding: '30px',
  },
  listTitle: {
    color: '#667eea',
    marginBottom: '20px',
  },
  presentCard: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px',
    borderBottom: '1px solid #e0e0e0',
    flexWrap: 'wrap',
    gap: '10px',
  },
  presentInfo: {
    display: 'flex',
    gap: '15px',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  presentDay: {
    fontWeight: 'bold',
    color: '#667eea',
  },
  presentType: {
    padding: '4px 8px',
    background: '#f0f0f0',
    borderRadius: '5px',
    fontSize: '12px',
  },
  presentDate: {
    color: '#999',
    fontSize: '14px',
  },
  openedBadge: {
    color: '#27ae60',
    fontSize: '12px',
  },
  presentActions: {
    display: 'flex',
    gap: '10px',
  },
  editBtn: {
    padding: '8px 15px',
    background: '#3498db',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  deleteBtn: {
    padding: '8px 15px',
    background: '#e74c3c',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default AdminDashboard;