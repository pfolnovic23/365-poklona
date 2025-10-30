import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from './firebase';
import Login from './components/Login';
import UserView from './components/UserView';
import AdminDashboard from './components/AdminDashboard';
import SplashCursor from './components/SplashCursor';

function App() {
  const [user, setUser] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        
        // Get user role from Firestore
        try {
          const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
          if (userDoc.exists()) {
            setUserRole(userDoc.data().role);
          }
        } catch (error) {
          console.error('Error fetching user role:', error);
        }
      } else {
        setUser(null);
        setUserRole(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8 bg-[#f5f4dc]">
        <div className="w-full max-w-md relative">
          <div className="relative z-10 bg-[#fffdfd]/95 border-4 border-black p-8 text-center" style={{ boxShadow: '16px 16px 0 0 #000' }}>
            <h2 className="text-2xl font-bold text-[#111827] mb-2">Učitavanje</h2>
            <p className="text-sm text-gray-700">Molimo pričekajte...</p>
            <div className="mt-4 flex items-center justify-center gap-2">
              <span className="inline-block w-3 h-3 bg-primary rounded-sm animate-pulse" />
              <span style={{ animationDelay: '0.12s' }} className="inline-block w-3 h-3 bg-primary rounded-sm animate-pulse" />
              <span style={{ animationDelay: '0.24s' }} className="inline-block w-3 h-3 bg-primary rounded-sm animate-pulse" />
            </div>
          </div>
        </div>
        <SplashCursor />
      </div>
    );
  }

  if (!user) {
    return <Login />;
  }

  if (userRole === 'admin') {
    return <AdminDashboard />;
  }

  return <UserView />;
}

export default App;