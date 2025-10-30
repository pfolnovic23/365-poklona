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
      <>
        <div className="min-h-screen flex items-center justify-center text-white text-2xl">Učitavanje...</div>
        <SplashCursor />
      </>
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