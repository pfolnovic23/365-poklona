import { useState, useEffect } from 'react';
import { Gift, Lock, CheckCircle } from 'lucide-react';

function PresentCard({ present, onOpen, isLocked }) {
  const [timeRemaining, setTimeRemaining] = useState('');

  useEffect(() => {
    const updateTimer = () => {
      const unlockTime = new Date(present.unlockDate + 'T00:00:00');
      const now = new Date();
      const diffMs = unlockTime - now;

      if (diffMs <= 0) {
        setTimeRemaining('');
        return;
      }

      const diffDays = diffMs / (1000 * 60 * 60 * 24);
      if (diffDays >= 1) {
        const days = Math.ceil(diffDays);
        setTimeRemaining(`${days} dana`);
      } else {
        const totalSeconds = Math.ceil(diffMs / 1000);
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        setTimeRemaining(`${hours}h ${minutes}m ${seconds}s`);
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [present.unlockDate]);

  const handleClick = () => {
    if (!isLocked) onOpen(present);
  };

  const getIcon = () => {
    if (present.opened) return <CheckCircle size={28} className="text-primary" />;
    if (isLocked) return <Lock size={28} className="text-gray-400" />;
    return <Gift size={28} className="text-primary" />;
  };

  return (
    <div
      className={`card glass ${isLocked ? 'opacity-75 cursor-not-allowed' : 'hover:scale-105 cursor-pointer'} transform transition-all duration-300`}
      onClick={handleClick}
    >
      <div className="mb-4">{getIcon()}</div>
      <h3 className="text-lg font-semibold text-white mb-2">Dan {present.day}</h3>
      {isLocked && <p className="text-sm text-gray-300">{timeRemaining}</p>}
      {present.opened && <p className="text-sm text-primary font-medium">Otvoreno</p>}
    </div>
  );
}

export default PresentCard;