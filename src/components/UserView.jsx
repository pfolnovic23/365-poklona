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

  const formatDateTime = (iso) => {
    if (!iso) return '';
    const d = new Date(iso);
    const pad = (n) => n.toString().padStart(2, '0');
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
  };

  const handleLogout = () => {
    signOut(auth);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 bg-[#f5f4dc]">
        <div className="w-full max-w-md relative mx-auto">
          <div className="relative z-10 bg-[#fffdfd]/95 border-4 border-black p-6 sm:p-8 text-center" style={{ boxShadow: '12px 12px 0 0 #000' }}>
            <h2 className="text-xl sm:text-2xl font-bold text-[#111827] mb-2">Učitavanje</h2>
            <p className="text-xs sm:text-sm text-gray-700">Molimo pričekajte...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 bg-[#f5f4dc]">
      <div className="w-full max-w-6xl relative">
        {/* square offset shadow */}
        <div className="absolute inset-0 translate-x-4 translate-y-4 bg-black" aria-hidden />

        <div className="relative z-10 bg-[#fffdfd]/95 border-4 border-black p-6">
          <header className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-extrabold text-[#111827]">Tvoji Pokloni</h1>
            <button onClick={handleLogout} className="py-2 px-4 border-2 border-black bg-[#111827] text-white">Odjavi se</button>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
            <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={() => setSelectedPresent(null)}>
              <div className="bg-[#fffdfd]/95 border-4 border-black p-6 sm:p-8 max-w-2xl w-full relative" onClick={(e) => e.stopPropagation()}>
                <button className="absolute top-3 sm:top-4 right-3 sm:right-4 text-[#111827] text-xl" onClick={() => setSelectedPresent(null)}>✕</button>
                <h2 className="text-xl sm:text-2xl font-bold text-[#111827] mb-2">Dan {selectedPresent.day}</h2>

                {selectedPresent.opened && selectedPresent.openedAt && (
                  <p className="text-xs sm:text-sm text-gray-600 mb-3">Otvoreno: {formatDateTime(selectedPresent.openedAt)}</p>
                )}

                {selectedPresent.type === 'text' && (
                  <p className="text-xs sm:text-base text-[#111827] leading-relaxed">{selectedPresent.content}</p>
                )}

                {selectedPresent.type === 'image' && (
                  <img src={selectedPresent.content} alt="Present" className="w-full mt-4" />
                )}

                {selectedPresent.type === 'song' && (
                  <div>
                    <p className="text-sm sm:text-base text-[#111827] font-semibold mb-2">{selectedPresent.title}</p>
                    <audio controls className="w-full">
                      <source src={selectedPresent.content} type="audio/mpeg" />
                    </audio>
                  </div>
                )}
                <div className="mt-6 flex justify-end gap-2">
                  <button onClick={() => setSelectedPresent(null)} className="px-3 sm:px-4 py-2 text-xs sm:text-sm border-2 border-black bg-[#f6f4ee] text-[#111827]">Zatvori</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
  {/* SplashCursor is mounted at App root to avoid duplicates */}
    </div>
  );
}

export default UserView;