import { useState, useEffect } from 'react';

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
    if (!isLocked && !present.opened) {
      onOpen(present);
    }
  };

  return (
    <div
      style={{
        ...styles.card,
        opacity: isLocked ? 0.5 : 1,
        cursor: isLocked || present.opened ? 'not-allowed' : 'pointer',
        transform: present.opened ? 'scale(0.95)' : 'scale(1)',
      }}
      onClick={handleClick}
    >
      <div style={styles.emoji}>
        {present.opened ? '📭' : '🎁'}
      </div>
      <h3 style={styles.day}>Dan {present.day}</h3>
      {isLocked && <p style={styles.locked}>🔒 {timeRemaining}</p>}
      {present.opened && <p style={styles.opened}>✓ Otvoreno</p>}
    </div>
  );
}

const styles = {
  card: {
    background: 'white',
    borderRadius: '15px',
    padding: '20px',
    textAlign: 'center',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease',
  },
  emoji: {
    fontSize: '48px',
    marginBottom: '10px',
  },
  day: {
    fontSize: '18px',
    color: '#667eea',
    marginBottom: '5px',
  },
  locked: {
    fontSize: '12px',
    color: '#999',
    marginTop: '5px',
  },
  opened: {
    fontSize: '12px',
    color: '#27ae60',
    marginTop: '5px',
  },
};

export default PresentCard;