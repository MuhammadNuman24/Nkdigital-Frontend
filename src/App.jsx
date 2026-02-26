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
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem('userInfo');
    setUser(null);
    setIsAdmin(false);
  };

  return (
    <div>
      {/* Quick Toggle for demo purposes (usually handled by routing) */}
      <div className="fixed bottom-4 right-4 z-[9999] flex gap-2">
        <button
          onClick={() => setIsAdmin(false)}
          className={`px-4 py-2 rounded-full font-bold text-xs shadow-lg transition-all ${!isAdmin ? 'bg-primary text-white scale-110' : 'bg-white text-gray-600'}`}
        >
          User View
        </button>
        <button
          onClick={() => setIsAdmin(true)}
          className={`px-4 py-2 rounded-full font-bold text-xs shadow-lg transition-all ${isAdmin ? 'bg-primary text-white scale-110' : 'bg-white text-gray-600'}`}
        >
          Admin Panel
        </button>
        {user && (
          <button
            onClick={logoutHandler}
            className="px-4 py-2 rounded-full font-bold text-xs shadow-lg bg-black text-white hover:bg-gray-800 transition-all"
          >
            Logout
          </button>
        )}
      </div>

      {isAdmin ? (
        user ? <Admin /> : <Auth setUser={setUser} />
      ) : (
        <Home />
      )}
    </div>
  );
};

export default App;
