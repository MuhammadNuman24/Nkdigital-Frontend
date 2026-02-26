import React from 'react';
import { Search, User, Menu } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full z-50 glass-morphism px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-8">
                <h1 className="text-2xl font-bold text-primary tracking-tighter cursor-pointer">NK DIGITAL</h1>
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
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                    <User className="w-5 h-5 text-gray-600" />
                </button>
                <button className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors">
                    <Menu className="w-5 h-5 text-gray-600" />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
