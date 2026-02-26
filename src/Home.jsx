import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import PinCard from './components/PinCard';
import { fetchBlogs } from './api';
import { motion, AnimatePresence } from 'framer-motion';

const Home = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState('All');

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

    const filteredBlogs = selectedCategory === 'All'
        ? blogs
        : blogs.filter(blog => blog.category === selectedCategory);

    return (
        <div className="min-h-screen pt-24 pb-12">
            <Navbar />

            {/* Category Bar */}
            <div className="flex items-center justify-center gap-4 mb-8">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-4 py-2 rounded-full font-bold text-sm transition-all ${selectedCategory === cat
                                ? 'bg-black text-white shadow-lg'
                                : 'bg-white text-gray-600 hover:bg-gray-100'
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {loading ? (
                <div className="flex justify-center items-center py-20">
                    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                </div>
            ) : (
                <div className="max-w-[2000px] mx-auto px-4 columns-2 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 gap-6">
                    <AnimatePresence>
                        {filteredBlogs.map(blog => (
                            <PinCard key={blog._id} pin={blog} />
                        ))}
                    </AnimatePresence>
                </div>
            )}
        </div>
    );
};

export default Home;
