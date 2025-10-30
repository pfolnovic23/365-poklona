import { useState, useEffect } from 'react';
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';
import { db, auth } from '../firebase';
import { signOut } from 'firebase/auth';
import PresentCard from './PresentCard';
import SplashCursor from './SplashCursor';

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
    return <div className="min-h-screen flex items-center justify-center text-white text-xl">Učitavanje...</div>;
  }

  return (
    <div className="min-h-screen p-6">
      <header className="flex items-center justify-between mb-10">
        <h1 className="text-4xl font-bold text-primary">Tvoji Pokloni</h1>
        <button onClick={handleLogout} className="py-2 px-4 rounded-lg border border-white/10 glass text-white">Odjavi se</button>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
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
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50" onClick={() => setSelectedPresent(null)}>
          <div className="bg-white/6 border border-white/10 rounded-2xl p-8 max-w-2xl w-full mx-4 relative" onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-4 right-4 text-white text-xl" onClick={() => setSelectedPresent(null)}>✕</button>
            <h2 className="text-2xl font-bold text-primary mb-4">Dan {selectedPresent.day}</h2>

            {selectedPresent.type === 'text' && (
              <p className="text-white leading-relaxed">{selectedPresent.content}</p>
            )}

            {selectedPresent.type === 'image' && (
              <img src={selectedPresent.content} alt="Present" className="w-full rounded-lg mt-4" />
            )}

            {selectedPresent.type === 'song' && (
              <div>
                <p className="text-primary font-semibold mb-2">{selectedPresent.title}</p>
                <audio controls className="w-full">
                  <source src={selectedPresent.content} type="audio/mpeg" />
                </audio>
              </div>
            )}
          </div>
        </div>
      )}
      <SplashCursor />
    </div>
  );
}

export default UserView;