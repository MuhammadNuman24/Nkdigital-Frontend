import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-12 px-6 mt-16 font-sans">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
                {/* Brand & Description */}
                <div className="flex-1">
                    <h2 className="text-2xl font-bold tracking-tight mb-4">NK Digital Hub</h2>
                    <p className="text-gray-400 max-w-sm mb-6 leading-relaxed">
                        Your go-to destination for the latest trends in fashion, beauty, home decor, and more.
                    </p>
                    <p className="text-sm text-gray-500">
                        &copy; {new Date().getFullYear()} NK Digital Hub. All rights reserved.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="flex-[0.5]">
                    <h3 className="text-lg font-semibold mb-4 text-gray-200">Quick Links</h3>
                    <ul className="flex flex-col gap-3">
                        <li>
                            <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
                        </li>
                        <li>
                            <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
                        </li>
                    </ul>
                </div>

                {/* Legal Elements */}
                <div className="flex-[0.5]">
                    <h3 className="text-lg font-semibold mb-4 text-gray-200">Legal</h3>
                    <ul className="flex flex-col gap-3">
                        <li>
                            <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</Link>
                        </li>
                        <li>
                            <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
