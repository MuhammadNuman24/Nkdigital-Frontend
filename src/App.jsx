import React, { useState, useEffect } from 'react';
import Home from './Home';
import Admin from './Admin';
import Auth from './Auth';

const App = () => {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo) {
      setUser(JSON.parse(userInfo));
    }

    const handleToggleAdmin = (e) => {
      setIsAdmin(e.detail);
    };

    window.addEventListener('toggleAdmin', handleToggleAdmin);
    return () => window.removeEventListener('toggleAdmin', handleToggleAdmin);
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem('userInfo');
    setUser(null);
    setIsAdmin(false);
  };

  return (
    <div>
      {/* Main Content */}

      {isAdmin ? (
        user ? <Admin /> : <Auth setUser={setUser} />
      ) : (
        <Home />
      )}
    </div>
  );
};

export default App;
