import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Admin from './Admin';
import Auth from './Auth';
import SingleBlog from './SingleBlog';

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
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<SingleBlog />} />
          <Route 
            path="/admin" 
            element={user ? <Admin /> : <Auth setUser={setUser} />} 
          />
        </Routes>

        {/* Maintain compatibility with the toggleAdmin event if used by Navbar */}
        {isAdmin && !user && (
          <div className="fixed inset-0 z-[100] bg-white">
             <Auth setUser={setUser} />
          </div>
        )}
        {isAdmin && user && (
          <div className="fixed inset-0 z-[100] bg-white">
             <Admin />
          </div>
        )}
      </div>
    </Router>
  );
};

export default App;
