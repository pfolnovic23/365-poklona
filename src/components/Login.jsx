import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { Gift } from 'lucide-react';
import SplashCursor from './SplashCursor';

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
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-md w-full glass border rounded-2xl p-10 shadow-2xl text-center">
        <div className="mb-6">
          <Gift size={48} className="text-primary mx-auto" />
        </div>
        <h1 className="text-3xl font-bold text-primary mb-2">365 Poklona</h1>
        <p className="text-sm text-gray-300 mb-6">Prijavi se da otvoriš svoje poklone</p>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-3 rounded-xl border bg-white/5 border-white/10 text-white outline-none"
            required
          />
          <input
            type="password"
            placeholder="Lozinka"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-3 rounded-xl border bg-white/5 border-white/10 text-white outline-none"
            required
          />

          {error && <p className="text-sm text-red-400 text-center">{error}</p>}

          <button type="submit" disabled={loading} className="mt-2 py-3 rounded-xl bg-primary text-white font-semibold disabled:opacity-60">
            {loading ? 'Prijava...' : 'Prijavi se'}
          </button>
        </form>
      </div>
      <SplashCursor />
    </div>
  );
}

export default Login;