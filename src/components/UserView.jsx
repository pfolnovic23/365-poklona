import { useState, useEffect } from 'react';
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';
import { db, auth } from '../firebase';
import { signOut } from 'firebase/auth';
import PresentCard from './PresentCard';

function UserView() {
  const [presents, setPresents] = useState([]);
  const [selectedPresent, setSelectedPresent] = useState(null);
  const [loading, setLoading] = useState(true);

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
      setLoading(false);
    } catch (error) {
      console.error('Error loading presents:', error);
      setLoading(false);
    }
  };

  const handleOpenPresent = async (present) => {
    setSelectedPresent(present);
    
    if (!present.opened) {
      try {
        const presentRef = doc(db, 'presents', present.id);
        await updateDoc(presentRef, {
          opened: true,
          openedAt: new Date().toISOString()
        });
        loadPresents();
      } catch (error) {
        console.error('Error opening present:', error);
      }
    }
  };

  const isPresentLocked = (present) => {
    const today = new Date();
    const unlockDate = new Date(present.unlockDate);
    return today < unlockDate;
  };

  const handleLogout = () => {
    signOut(auth);
  };

  if (loading) {
    return <div style={styles.loading}>Učitavanje...</div>;
  }

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>🎁 Tvoji Pokloni</h1>
        <button onClick={handleLogout} style={styles.logoutBtn}>
          Odjavi se
        </button>
      </header>

      <div style={styles.grid}>
        {presents.map(present => (
          <PresentCard
            key={present.id}
            present={present}
            onOpen={handleOpenPresent}
            isLocked={isPresentLocked(present)}
          />
        ))}
      </div>

      {selectedPresent && (
        <div style={styles.modal} onClick={() => setSelectedPresent(null)}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button 
              style={styles.closeBtn}
              onClick={() => setSelectedPresent(null)}
            >
              ✕
            </button>
            <h2 style={styles.modalTitle}>Dan {selectedPresent.day}</h2>
            
            {selectedPresent.type === 'text' && (
              <p style={styles.text}>{selectedPresent.content}</p>
            )}
            
            {selectedPresent.type === 'image' && (
              <img 
                src={selectedPresent.content} 
                alt="Present" 
                style={styles.image}
              />
            )}
            
            {selectedPresent.type === 'song' && (
              <div>
                <p style={styles.songTitle}>{selectedPresent.title}</p>
                <audio controls style={styles.audio}>
                  <source src={selectedPresent.content} type="audio/mpeg" />
                </audio>
              </div>
            )}
          </div>
        </div>
      )}
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
    title: {
      color: 'var(--accent)',
      fontSize: '36px',
      fontWeight: '700',
    },
    logoutBtn: {
      padding: '12px 24px',
      background: 'var(--card-bg)',
      border: '1px solid var(--card-border)',
      borderRadius: '12px',
      color: 'var(--text-primary)',
      cursor: 'pointer',
      fontWeight: '600',
      transition: 'all 0.3s ease',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
      gap: '24px',
      maxWidth: '1400px',
      margin: '0 auto',
    },
    loading: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      color: 'var(--text-primary)',
      fontSize: '24px',
    },
    modal: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(15, 15, 35, 0.9)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
      zIndex: 1000,
      backdropFilter: 'blur(10px)',
    },
    modalContent: {
      background: 'var(--card-bg)',
      border: '1px solid var(--card-border)',
      borderRadius: '20px',
      padding: '40px',
      maxWidth: '600px',
      width: '100%',
      maxHeight: '80vh',
      overflow: 'auto',
      position: 'relative',
      boxShadow: '0 20px 60px var(--shadow)',
    },
    closeBtn: {
      position: 'absolute',
      top: '20px',
      right: '20px',
      background: 'none',
      border: 'none',
      fontSize: '24px',
      cursor: 'pointer',
      color: 'var(--text-secondary)',
      transition: 'color 0.3s ease',
    },
    modalTitle: {
      color: 'var(--accent)',
      marginBottom: '20px',
      fontSize: '32px',
      fontWeight: '700',
    },
    text: {
      fontSize: '18px',
      lineHeight: '1.7',
      color: 'var(--text-primary)',
    },
    image: {
      width: '100%',
      borderRadius: '12px',
      marginTop: '20px',
    },
    songTitle: {
      fontSize: '22px',
      marginBottom: '15px',
      color: 'var(--accent)',
      fontWeight: '600',
    },
    audio: {
      width: '100%',
      marginTop: '20px',
    },
  };export default UserView;