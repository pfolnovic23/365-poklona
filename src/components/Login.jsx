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
    <div className="min-h-screen flex items-center justify-center p-8 bg-[#f5f4dc]">

      {/* Single centered square card only (no top banner) */}
      <div className="w-full max-w-md relative">
        {/* sharp-edged offset shadow */}
        <div className="absolute inset-0 translate-x-4 translate-y-4 bg-black" aria-hidden />

        <div className="relative z-10 bg-[#fffdfd]/95 border-4 border-black p-8 text-center">
          <div className="mb-6">
            <Gift size={48} className="text-primary mx-auto" />
          </div>
          <h1 className="text-3xl font-extrabold text-[#111827] mb-2">Pavel Voli Taru</h1>
          <p className="text-sm text-gray-700 mb-6">Prijavi se da otvoriš svoje poklone</p>

          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-3 rounded-none border-2 border-black bg-[#f6f4ee] text-[#111827] outline-none focus:ring-0"
              required
            />
            <input
              type="password"
              placeholder="Lozinka"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-4 py-3 rounded-none border-2 border-black bg-[#f6f4ee] text-[#111827] outline-none focus:ring-0"
              required
            />

            {error && <p className="text-sm text-red-600 text-center">{error}</p>}

            <button type="submit" disabled={loading} className="mt-2 py-3 rounded-none bg-primary text-white font-bold border-2 border-black disabled:opacity-60 hover:scale-[1.02] transition-transform">
              {loading ? 'Prijava...' : 'Prijavi se'}
            </button>
          </form>
        </div>
      </div>

      {/* Splash cursor remains global */}
      <SplashCursor />
    </div>
  );
}

export default Login;