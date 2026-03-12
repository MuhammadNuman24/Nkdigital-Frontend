import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import PinCard from './components/PinCard';
import { fetchBlogs } from './api';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Compass, Sparkles } from 'lucide-react';

const Explore = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', 'Fashion', 'Beauty', 'Pet', 'Jewelry', 'Home Decor'];

    useEffect(() => {
        const getBlogs = async () => {
            try {
                const { data } = await fetchBlogs();
                setBlogs(data);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            } finally {
                setLoading(false);
            }
        };
        getBlogs();
    }, []);

    const filteredBlogs = blogs.filter(blog => {
        const matchesCategory = activeCategory === 'All' || blog.category === activeCategory;
        const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                             (blog.hashtags && blog.hashtags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())));
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            
            <header className="pt-32 pb-12 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col md:flex-row md:items-end justify-between gap-8"
                    >
                        <div>
                            <div className="flex items-center gap-2 text-primary font-black uppercase tracking-widest text-sm mb-4">
                                <Compass size={20} />
                                <span>Discover</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight">
                                Explore <br/><span className="text-gray-400">Everything.</span>
                            </h1>
                        </div>

                        <div className="relative w-full md:w-96">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                            <input 
                                type="text"
                                placeholder="Search by title or hashtag..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-6 py-4 bg-white border-2 border-transparent focus:border-black rounded-2xl shadow-sm outline-none transition-all font-medium"
                            />
                        </div>
                    </motion.div>

                    {/* Categories */}
                    <div className="flex flex-wrap gap-3 mt-12 overflow-x-auto pb-4 no-scrollbar">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-3 rounded-2xl font-bold whitespace-nowrap transition-all ${
                                    activeCategory === cat 
                                    ? 'bg-black text-white shadow-xl scale-105' 
                                    : 'bg-white text-gray-500 hover:bg-gray-100'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </header>

            <main className="px-6 pb-20">
                <div className="max-w-[2000px] mx-auto">
                    {loading ? (
                        <div className="flex justify-center items-center py-40">
                             <div className="w-12 h-12 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
                        </div>
                    ) : (
                        <>
                            {filteredBlogs.length > 0 ? (
                                <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 gap-6">
                                    <AnimatePresence>
                                        {filteredBlogs.map(blog => (
                                            <PinCard key={blog._id} pin={blog} />
                                        ))}
                                    </AnimatePresence>
                                </div>
                            ) : (
                                <div className="flex flex-col items-center justify-center py-40 text-center">
                                    <Sparkles size={60} className="text-gray-200 mb-6" />
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">No results found</h3>
                                    <p className="text-gray-500">Try adjusting your search or category filters.</p>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </main>
        </div>
    );
};

export default Explore;
