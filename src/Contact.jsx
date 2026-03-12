import React from 'react';
import Navbar from './components/Navbar';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
    const contactMethods = [
        {
            icon: <Mail className="w-6 h-6" />,
            label: "Email Us",
            value: "numanrazzaq24@gmail.com",
            href: "mailto:numanrazzaq24@gmail.com",
            color: "bg-blue-50 text-blue-600"
        },
        {
            icon: <MessageCircle className="w-6 h-6" />,
            label: "WhatsApp",
            value: "+92 304 1792624",
            href: "https://wa.me/923041792624",
            color: "bg-green-50 text-green-600"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            
            <main className="pt-32 pb-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        {/* Left Side: Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
                                Let's Start a <br/>
                                <span className="text-gray-400 italic">Conversation</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                                Have a question about a product? Or interested in a partnership? We're here to help you navigate the digital market.
                            </p>

                            <div className="space-y-6">
                                {contactMethods.map((method, index) => (
                                    <a 
                                        key={index}
                                        href={method.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-6 p-6 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all group"
                                    >
                                        <div className={`p-4 rounded-2xl ${method.color} transition-colors group-hover:bg-black group-hover:text-white`}>
                                            {method.icon}
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">{method.label}</p>
                                            <p className="text-xl font-bold text-gray-900">{method.value}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>

                            <div className="mt-12 flex items-center gap-8 text-gray-500">
                                <div className="flex items-center gap-2">
                                    <Clock size={20} />
                                    <span className="font-medium">Reply within 24h</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin size={20} />
                                    <span className="font-medium">Global Support</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Side: Quick Form */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-gray-200 border border-gray-100"
                        >
                            <h2 className="text-2xl font-bold mb-8">Send a Quick Message</h2>
                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-500 ml-2">YOUR NAME</label>
                                        <input type="text" placeholder="John Doe" className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-black outline-none transition-all" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-500 ml-2">EMAIL ADDRESS</label>
                                        <input type="email" placeholder="john@example.com" className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-black outline-none transition-all" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-500 ml-2">MESSAGE</label>
                                    <textarea rows="4" placeholder="How can we help?" className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-black outline-none transition-all resize-none"></textarea>
                                </div>
                                <button className="w-full py-5 bg-black text-white font-black rounded-2xl hover:scale-[0.98] transition-transform flex items-center justify-center gap-3">
                                    SEND MESSAGE <Send size={20} />
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Contact;
