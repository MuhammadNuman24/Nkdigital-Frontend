import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Admin from './Admin';
import Auth from './Auth';
import SingleBlog from './SingleBlog';
import EditBlog from './EditBlog';

import About from './About';
import Contact from './Contact';
import Explore from './Explore';
import Terms from './Terms';
import PrivacyPolicy from './PrivacyPolicy';
import Footer from './components/Footer';

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
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/explore" element={<Explore />} />
          <Route 
            path="/admin" 
            element={user ? <Admin /> : <Auth setUser={setUser} />} 
          />
          <Route 
            path="/edit-blog/:id" 
            element={user ? <EditBlog /> : <Auth setUser={setUser} />} 
          />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
        
        <Footer />

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
