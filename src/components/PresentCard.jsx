import { useState, useEffect } from 'react';
import { Gift, Lock, CheckCircle } from 'lucide-react';

function PresentCard({ present, onOpen, isLocked }) {
  const [timeRemaining, setTimeRemaining] = useState('');
  const [hoursRemaining, setHoursRemaining] = useState(null);

  useEffect(() => {
    const updateTimer = () => {
      const unlockTime = new Date(present.unlockDate + 'T00:00:00');
      const now = new Date();
      const diffMs = unlockTime - now;

      if (diffMs <= 0) {
        setTimeRemaining('');
        setHoursRemaining(null);
        return;
      }

      const diffDays = diffMs / (1000 * 60 * 60 * 24);
      const diffHours = diffMs / (1000 * 60 * 60);
      setHoursRemaining(diffHours);

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

  const getTimerColor = () => {
    if (!hoursRemaining) return '';
    if (hoursRemaining < 24) return 'text-yellow-600'; // Less than 24 hours = yellow/orange
    return 'text-red-600'; // More than 24 hours = red
  };

  const getIcon = () => {
    if (present.opened) return <CheckCircle size={28} className="text-green-600" />;
    if (isLocked) {
      const iconColor = getTimerColor();
      return <Lock size={28} className={iconColor || 'text-gray-400'} />;
    }
    return <Gift size={28} className="text-green-600" />;
  };

  return (
    <div
      className={`p-6 border-2 border-black bg-[#f6f4ee] text-[#111827] ${isLocked ? 'opacity-75 cursor-not-allowed' : 'hover:scale-105 cursor-pointer'} transform transition-all duration-300`}
      onClick={handleClick}
      style={{ borderRadius: 0 }}
    >
      <div className="mb-4">{getIcon()}</div>
      <h3 className="text-lg font-semibold mb-2">Dan {present.day}</h3>
      {isLocked && <p className={`text-sm font-medium ${getTimerColor()}`}>{timeRemaining}</p>}
      {present.opened && <p className="text-sm text-green-600 font-medium">✓ Otvoreno</p>}
    </div>
  );
}

export default PresentCard;