import { useState, useEffect } from 'react';
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';
import { db, auth } from '../firebase';
import { signOut } from 'firebase/auth';
import PresentCard from './PresentCard';
import confetti from 'canvas-confetti';

function UserView() {
  const [presents, setPresents] = useState([]);
  const [selectedPresent, setSelectedPresent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imageLoading, setImageLoading] = useState(true);

  useEffect(() => {
    loadPresents();
    
    // Reset zoom and scroll to top when entering UserView
    window.scrollTo(0, 0);
    document.documentElement.style.zoom = '100%';
    
    // For iOS Safari
    document.body.style.zoom = '100%';
    
    // Remove no-scroll restriction when on UserView page
    document.body.classList.remove('no-scroll');
  }, []);

  // Reset image loading when present changes
  useEffect(() => {
    if (selectedPresent?.type === 'image') {
      setImageLoading(true);
    }
  }, [selectedPresent?.id]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedPresent) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedPresent]);

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
        
        // Trigger single smooth confetti celebration
        const colors = ['#667eea', '#f5f4dc', '#111827', '#fffdfd', '#ff6b6b', '#4ecdc4', '#ffd93d', '#a8dadc'];
        
        confetti({
          particleCount: 200,
          spread: 360,
          startVelocity: 50,
          gravity: 0.4,
          ticks: 300,
          scalar: 1.2,
          colors: colors,
          origin: { y: 0.5 }
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
        <div className="w-full max-w-md relative pb-4 pr-4">
          <div className="relative z-10 bg-[#fffdfd]/95 border-4 border-black p-6 sm:p-8 text-center" style={{ boxShadow: '12px 12px 0 0 #000' }}>
            <h2 className="text-xl sm:text-2xl font-bold text-[#111827] mb-2">Učitavanje</h2>
            <p className="text-xs sm:text-sm text-gray-700">Molimo pričekajte...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 bg-[#f5f4dc] overflow-x-hidden">
      <div className="w-full max-w-6xl relative">
        <div className="relative z-10 bg-[#fffdfd]/95 border-4 border-black p-6">
          <header className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-extrabold text-[#111827]">For Ma Waf</h1>
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
            <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 backdrop-blur-sm transition-all duration-200 animate-fadeIn" onClick={() => setSelectedPresent(null)}>
              <div className="bg-[#fffdfd]/95 border-4 border-black p-6 sm:p-8 max-w-sm sm:max-w-md w-full relative shadow-lg transform transition-all duration-300 animate-slideUp" onClick={(e) => e.stopPropagation()}>
                <button className="absolute top-3 sm:top-4 right-3 sm:right-4 text-[#111827] text-xl hover:scale-110 transition-transform" onClick={() => setSelectedPresent(null)}>✕</button>
                <h2 className="text-xl sm:text-2xl font-bold text-[#111827] mb-2">Dan {selectedPresent.day}</h2>

                {selectedPresent.opened && selectedPresent.openedAt && (
                  <p className="text-xs sm:text-sm text-gray-600 mb-3">Otvoreno: {formatDateTime(selectedPresent.openedAt)}</p>
                )}

                {selectedPresent.type === 'text' && (
                  <p className="text-xs sm:text-base text-[#111827] leading-relaxed">{selectedPresent.content}</p>
                )}

                {selectedPresent.type === 'image' && (
                  <div>
                    {selectedPresent.title && (
                      <p className="text-xs sm:text-base text-[#111827] leading-relaxed mb-4">{selectedPresent.title}</p>
                    )}
                    <div className="relative mt-4 min-h-48 bg-gradient-to-br from-[#f5f4dc] to-[#f6f4ee] flex items-center justify-center">
                      {imageLoading && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="flex flex-col items-center gap-3">
                            <div className="relative w-12 h-12">
                              <div className="absolute inset-0 border-4 border-transparent border-t-primary border-r-primary rounded-full animate-spin" style={{ animation: 'spin 1s linear infinite' }} />
                            </div>
                            <p className="text-xs text-[#111827] font-medium">Učitavanje slike...</p>
                          </div>
                        </div>
                      )}
                      <img 
                        src={selectedPresent.content} 
                        alt="Present" 
                        className={`w-full transition-opacity duration-500 ${imageLoading ? 'opacity-0' : 'opacity-100'}`}
                        onLoad={() => setImageLoading(false)}
                        onError={() => setImageLoading(false)}
                      />
                    </div>
                  </div>
                )}

                {selectedPresent.type === 'song' && (
                  <div>
                    <p className="text-sm sm:text-base text-[#111827] font-semibold mb-4">{selectedPresent.title}</p>
                    {(() => {
                      // Spotify embed - no border container
                      if (selectedPresent.content.includes('spotify.com')) {
                        const spotifyId = selectedPresent.content.split('/track/')[1]?.split('?')[0];
                        if (spotifyId) {
                          return (
                            <iframe
                              src={`https://open.spotify.com/embed/track/${spotifyId}`}
                              width="100%"
                              height="352"
                              frameBorder="0"
                              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                              style={{ border: 'none', display: 'block' }}
                            />
                          );
                        }
                      }
                      // YouTube embed - with black border
                      if (selectedPresent.content.includes('youtube.com') || selectedPresent.content.includes('youtu.be')) {
                        let videoId = '';
                        if (selectedPresent.content.includes('youtube.com/watch?v=')) {
                          videoId = selectedPresent.content.split('v=')[1]?.split('&')[0];
                        } else if (selectedPresent.content.includes('youtu.be/')) {
                          videoId = selectedPresent.content.split('youtu.be/')[1];
                        }
                        if (videoId) {
                          return (
                            <div className="border-4 border-black p-0 overflow-hidden">
                              <iframe
                                width="100%"
                                height="315"
                                src={`https://www.youtube.com/embed/${videoId}`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                style={{ border: 'none', display: 'block' }}
                              />
                            </div>
                          );
                        }
                      }
                      return <p className="text-sm text-red-600 p-4">Nevažeći Spotify ili YouTube URL</p>;
                    })()}
                  </div>
                )}
                <div className="mt-6 flex justify-end gap-2">
                  <button onClick={() => setSelectedPresent(null)} className="px-3 sm:px-4 py-2 text-xs sm:text-sm border-2 border-black bg-[#111827] text-white hover:bg-black transition-colors">Zatvori</button>
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