import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import logo from '../assets/nklogo.png';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-12 px-6 mt-16 font-sans">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-8">
                {/* Brand & Description */}
                <div className="flex-[1.2]">
                    <div className="bg-white inline-block px-4 py-3 rounded-2xl mb-6 shadow-md">
                        <img src={logo} alt="NK Digital Hub" className="h-8 object-contain" />
                    </div>
                    <p className="text-gray-400 max-w-sm mb-6 leading-relaxed">
                        Your go-to destination for the latest trends in fashion, beauty, home decor, and more.
                    </p>
                    <p className="text-sm text-gray-500 hidden lg:block">
                        &copy; {new Date().getFullYear()} NK Digital Hub. All rights reserved.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-12 lg:gap-8 flex-[2] justify-between w-full">
                    {/* Quick Links */}
                    <div className="flex-1">
                        <h3 className="text-lg font-bold mb-5 text-gray-200 uppercase tracking-widest text-sm">Quick Links</h3>
                        <ul className="flex flex-col gap-3">
                            <li>
                                <Link to="/" className="text-gray-400 hover:text-white transition-colors font-medium">Home</Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-gray-400 hover:text-white transition-colors font-medium">About Us</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors font-medium">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal Elements */}
                    <div className="flex-1">
                        <h3 className="text-lg font-bold mb-5 text-gray-200 uppercase tracking-widest text-sm">Legal</h3>
                        <ul className="flex flex-col gap-3">
                            <li>
                                <Link to="/terms" className="text-gray-400 hover:text-white transition-colors font-medium">Terms & Conditions</Link>
                            </li>
                            <li>
                                <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors font-medium">Privacy Policy</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="flex-[1.5]">
                        <h3 className="text-lg font-bold mb-5 text-gray-200 uppercase tracking-widest text-sm">Contact Us</h3>
                        <ul className="flex flex-col gap-4">
                            <li className="flex items-center gap-3 text-gray-400">
                                <Mail className="w-5 h-5 text-primary" />
                                <a href="mailto:numanrazzaq24@gmail.com" className="hover:text-white transition-colors font-medium">
                                    numanrazzaq24@gmail.com
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Phone className="w-5 h-5 text-primary" />
                                <a href="https://wa.me/923041792624" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors font-medium">
                                    +92 304 1792624
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Mobile Copyright */}
                <p className="text-sm text-gray-500 lg:hidden w-full text-center mt-8 pt-8 border-t border-gray-800">
                    &copy; {new Date().getFullYear()} NK Digital Hub. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
