import { useState, useEffect } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { Gift } from 'lucide-react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [iconColor, setIconColor] = useState('text-green-500');

  const colors = ['text-green-500', 'text-yellow-500', 'text-red-500'];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIconColor((prevColor) => {
        const currentIndex = colors.indexOf(prevColor);
        return colors[(currentIndex + 1) % colors.length];
      });
    }, 2000);

    // Add no-scroll class to body when on login page
    document.body.classList.add('no-scroll');

    return () => {
      clearInterval(interval);
      document.body.classList.remove('no-scroll');
    };
  }, []);

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
    <div className="min-h-screen w-full flex items-center justify-center p-4 sm:p-6 md:p-8 bg-[#f5f4dc]">
      {/* Single centered square card only (no top banner) */}
      <div className="w-full max-w-sm sm:max-w-md relative mx-auto pb-4 pr-4">
        {/* Card with centered shadow effect */}
        <div className="relative z-10 bg-[#fffdfd]/95 border-4 border-black p-6 sm:p-8 text-center" style={{ boxShadow: '12px 12px 0 0 #000' }}>
          <div className="mb-6">
            <Gift size={48} className={`${iconColor} mx-auto transition-colors duration-500`} />
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#111827] mb-2">Pavel Voli Taru</h1>
          <p className="text-xs sm:text-sm text-gray-700 mb-6">Prijavi se da otvoriš svoj(e) poklon(e)</p>

          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-3 sm:px-4 py-2 sm:py-3 rounded-none border-2 border-black bg-[#f6f4ee] text-[#111827] text-sm sm:text-base outline-none focus:ring-0"
              required
            />
            <input
              type="password"
              placeholder="Lozinka"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-3 sm:px-4 py-2 sm:py-3 rounded-none border-2 border-black bg-[#f6f4ee] text-[#111827] text-sm sm:text-base outline-none focus:ring-0"
              required
            />

            {error && <p className="text-sm text-red-600 text-center">{error}</p>}

            <button type="submit" disabled={loading} className="mt-2 py-2 sm:py-3 px-3 sm:px-4 text-sm sm:text-base rounded-none bg-primary text-white font-bold border-2 border-black disabled:opacity-60 hover:scale-[1.02] transition-transform">
              {loading ? 'Prijava...' : 'Prijavi se'}
            </button>
          </form>
        </div>
      </div>

  {/* Splash cursor is mounted once at the App root */}
    </div>
  );
}

export default Login;