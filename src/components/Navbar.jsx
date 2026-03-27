import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/nklogo.png';
import { Search, User, Menu, Plus, X } from 'lucide-react';

const Navbar = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const userInfo = localStorage.getItem('userInfo');
        if (userInfo) {
            setUser(JSON.parse(userInfo));
        }
    }, []);

    return (
        <nav className="fixed top-0 w-full z-50 glass-morphism px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-8">
                <Link to="/">
                    <img
                        src={logo}
                        alt="NK DIGITAL"
                        className="h-10 cursor-pointer object-contain"
                    />
                </Link>
                <div className="hidden md:flex items-center gap-6 text-sm font-medium">
                    <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                    <Link to="/explore" className="text-gray-500 hover:text-primary transition-colors">Explore</Link>
                    {user && (
                        <Link to="/admin" className="text-gray-500 hover:text-primary transition-colors">Create</Link>
                    )}
                    <Link to="/about" className="text-gray-500 hover:text-primary transition-colors">About Us</Link>
                    <Link to="/contact" className="text-gray-500 hover:text-primary transition-colors">Contact</Link>
                </div>
            </div>

            <div className="flex-1 max-w-xl mx-8 relative hidden sm:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                    type="text"
                    placeholder="Search for amazing ideas..."
                    className="w-full bg-gray-100 border-none rounded-full py-2 pl-10 pr-4 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
            </div>

            <div className="flex items-center gap-4">
                <div className="relative group">
                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors flex items-center gap-2" onClick={() => !user && navigate('/admin')}>
                        <User className="w-5 h-5 text-gray-600" />
                        <span className="text-sm font-bold text-gray-600 hidden lg:block">
                            {user ? user.name.split(' ')[0] : 'Account'}
                        </span>
                    </button>

                    {/* Hover menu */}
                    <div className="absolute right-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 w-48 overflow-hidden">
                            {user && (
                                <Link
                                    to="/admin"
                                    className="w-full text-left px-4 py-3 text-sm font-bold text-gray-700 hover:bg-primary hover:text-white transition-colors flex items-center gap-2"
                                >
                                    <Plus className="w-4 h-4" />
                                    Upload Blog
                                </Link>
                            )}
                            {!user ? (
                                <Link
                                    to="/admin"
                                    className="w-full text-left px-4 py-3 text-sm font-bold text-gray-700 hover:bg-gray-100 transition-colors flex items-center gap-2"
                                >
                                    Log In
                                </Link>
                            ) : (
                                <button
                                    onClick={() => {
                                        localStorage.removeItem('userInfo');
                                        window.location.reload();
                                    }}
                                    className="w-full text-left px-4 py-3 text-sm font-bold text-red-500 hover:bg-red-50 transition-colors flex items-center gap-2"
                                >
                                    Logout
                                </button>
                            )}
                        </div>
                    </div>
                </div>
                <button 
                    className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X className="w-5 h-5 text-gray-600" /> : <Menu className="w-5 h-5 text-gray-600" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl py-4 flex flex-col items-center gap-4 text-sm font-medium">
                    <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary transition-colors text-lg">Home</Link>
                    <Link to="/explore" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-500 hover:text-primary transition-colors text-lg">Explore</Link>
                    {user && (
                        <Link to="/admin" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-500 hover:text-primary transition-colors text-lg">Create</Link>
                    )}
                    <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-500 hover:text-primary transition-colors text-lg">About Us</Link>
                    <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-500 hover:text-primary transition-colors text-lg">Contact</Link>
                    
                    <div className="w-full px-6 mt-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full bg-gray-100 border-none rounded-full py-3 pl-10 pr-4 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                            />
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
