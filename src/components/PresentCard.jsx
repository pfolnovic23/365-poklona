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
    const interval = setInterval(updateTimer, 1000); // update every second
    return () => clearInterval(interval);
  }, [present.unlockDate]);

  const handleClick = () => {
    if (!isLocked) {
      onOpen(present);
    }
  };

  const getIcon = () => {
    if (present.opened) return <CheckCircle size={32} color="var(--accent)" />;
    if (isLocked) return <Lock size={32} color="var(--text-secondary)" />;
    return <Gift size={32} color="var(--accent)" />;
  };

  return (
    <div
      style={{
        ...styles.card,
        opacity: isLocked ? 0.7 : 1,
        cursor: isLocked ? 'not-allowed' : 'pointer',
        transform: present.opened ? 'scale(0.98)' : 'scale(1)',
      }}
      onClick={handleClick}
    >
      <div style={styles.icon}>
        {getIcon()}
      </div>
      <h3 style={styles.day}>Dan {present.day}</h3>
      {isLocked && <p style={styles.locked}>{timeRemaining}</p>}
      {present.opened && <p style={styles.opened}>Otvoreno</p>}
    </div>
  );
}

const styles = {
  card: {
    background: 'var(--card-bg)',
    border: '1px solid var(--card-border)',
    borderRadius: '16px',
    padding: '24px',
    textAlign: 'center',
    boxShadow: '0 8px 32px var(--shadow)',
    backdropFilter: 'blur(10px)',
    transition: 'all 0.3s ease',
  },
  icon: {
    marginBottom: '16px',
  },
  day: {
    fontSize: '20px',
    fontWeight: '600',
    color: 'var(--text-primary)',
    marginBottom: '8px',
  },
  locked: {
    fontSize: '14px',
    color: 'var(--text-secondary)',
    fontWeight: '500',
  },
  opened: {
    fontSize: '14px',
    color: 'var(--accent)',
    fontWeight: '500',
  },
};

export default PresentCard;