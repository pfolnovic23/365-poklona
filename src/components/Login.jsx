import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { Gift } from 'lucide-react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setError('Pogrešna email adresa ili lozinka');
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.icon}>
          <Gift size={48} color="var(--accent)" />
        </div>
        <h1 style={styles.title}>365 Poklona</h1>
        <p style={styles.subtitle}>Prijavi se da otvoriš svoje poklone</p>
        
        <form onSubmit={handleLogin} style={styles.form}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />
          <input
            type="password"
            placeholder="Lozinka"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
          
          {error && <p style={styles.error}>{error}</p>}
          
          <button type="submit" style={styles.button} disabled={loading}>
            {loading ? 'Prijava...' : 'Prijavi se'}
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  },
  card: {
    background: 'var(--card-bg)',
    border: '1px solid var(--card-border)',
    borderRadius: '20px',
    padding: '40px',
    maxWidth: '400px',
    width: '100%',
    boxShadow: '0 20px 60px var(--shadow)',
    backdropFilter: 'blur(10px)',
    textAlign: 'center',
  },
  icon: {
    marginBottom: '20px',
  },
  title: {
    fontSize: '32px',
    marginBottom: '10px',
    color: 'var(--accent)',
    fontWeight: '700',
  },
  subtitle: {
    color: 'var(--text-secondary)',
    marginBottom: '30px',
    fontSize: '16px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  input: {
    padding: '15px',
    borderRadius: '12px',
    border: '1px solid var(--card-border)',
    background: 'rgba(255, 255, 255, 0.05)',
    color: 'var(--text-primary)',
    fontSize: '16px',
    outline: 'none',
    transition: 'border 0.3s',
  },
  button: {
    padding: '15px',
    borderRadius: '12px',
    border: 'none',
    background: 'var(--accent)',
    color: 'var(--bg-primary)',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'transform 0.2s, opacity 0.2s',
  },
  error: {
    color: '#ff6b6b',
    textAlign: 'center',
    fontSize: '14px',
  },
};

export default Login;