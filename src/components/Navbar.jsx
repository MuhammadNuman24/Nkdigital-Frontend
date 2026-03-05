import React from 'react';
import logo from '../assets/nklogo.png';
import { Search, User, Menu, Plus } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full z-50 glass-morphism px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-8">
                <img
                    src={logo}
                    alt="NK DIGITAL"
                    className="h-10 cursor-pointer object-contain"
                    onClick={() => window.location.href = '/'}
                />
                <div className="hidden md:flex items-center gap-6 text-sm font-medium">
                    <a href="/" className="hover:text-primary transition-colors">Home</a>
                    <a href="/explore" className="text-gray-500 hover:text-primary transition-colors">Explore</a>
                    <a href="/create" className="text-gray-500 hover:text-primary transition-colors">Create</a>
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
                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors flex items-center gap-2">
                        <User className="w-5 h-5 text-gray-600" />
                        <span className="text-sm font-bold text-gray-600 hidden lg:block">Account</span>
                    </button>

                    {/* Hover menu */}
                    <div className="absolute right-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 w-48 overflow-hidden">
                            <button
                                onClick={() => {
                                    // Handle Admin Toggle in App.jsx or just navigate
                                    // For now, let's assume switching to Admin view
                                    const event = new CustomEvent('toggleAdmin', { detail: true });
                                    window.dispatchEvent(event);
                                }}
                                className="w-full text-left px-4 py-3 text-sm font-bold text-gray-700 hover:bg-primary hover:text-white transition-colors flex items-center gap-2"
                            >
                                <Plus className="w-4 h-4" />
                                Upload Blog
                            </button>
                            <button
                                onClick={() => {
                                    localStorage.removeItem('userInfo');
                                    window.location.reload();
                                }}
                                className="w-full text-left px-4 py-3 text-sm font-bold text-red-500 hover:bg-red-50 transition-colors flex items-center gap-2"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
                <button className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors">
                    <Menu className="w-5 h-5 text-gray-600" />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
