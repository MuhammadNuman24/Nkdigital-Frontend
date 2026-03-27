import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchBlog } from './api';
import Navbar from './components/Navbar';
import { motion } from 'framer-motion';
import { Calendar, User, Tag, ArrowLeft, Share2 } from 'lucide-react';

const SingleBlog = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const userInfo = localStorage.getItem('userInfo');
        if (userInfo) {
            setIsAdmin(true);
        }
        const getBlog = async () => {
            try {
                const { data } = await fetchBlog(id);
                setBlog(data);
            } catch (error) {
                console.error('Error fetching blog:', error);
            } finally {
                setLoading(false);
            }
        };
        getBlog();
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen flex justify-center items-center bg-gray-50">
                <div className="w-16 h-16 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    if (!blog) {
        return (
            <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
                <h2 className="text-2xl font-bold mb-4">Blog not found</h2>
                <Link to="/" className="text-blue-600 flex items-center gap-2 hover:underline">
                    <ArrowLeft size={20} /> Back to Home
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            
            <main className="max-w-4xl mx-auto pt-32 pb-20 px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Header */}
                    <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-black mb-8 transition-colors group">
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        <span>Back to Home</span>
                    </Link>

                    {/* Banner Image */}
                    <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl mb-12">
                        <img 
                            src={blog.imageUrl} 
                            alt={blog.title} 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    </div>

                    {/* Title & Meta */}
                    <div className="mb-10">
                        <div className="flex flex-wrap gap-2 mb-4">
                            {blog.category && (
                                <span className="px-3 py-1 bg-black text-white text-xs font-bold rounded-full tracking-wider uppercase">
                                    {blog.category}
                                </span>
                            )}
                            {blog.type && (
                                <span className="px-3 py-1 bg-gray-200 text-gray-700 text-xs font-bold rounded-full tracking-wider uppercase">
                                    {blog.type}
                                </span>
                            )}
                        </div>
                        
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6">
                            {blog.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-gray-500 border-b border-gray-100 pb-8">
                            <div className="flex items-center gap-2">
                                <User size={18} />
                                <span className="font-medium">{blog.author || 'Admin'}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar size={18} />
                                <span className="font-medium">
                                    {new Date(blog.createdAt).toLocaleDateString('en-US', { 
                                        month: 'long', day: 'numeric', year: 'numeric' 
                                    })}
                                </span>
                            </div>
                            <button className="ml-auto p-2 hover:bg-gray-100 rounded-full transition-colors">
                                <Share2 size={20} className="text-gray-700" />
                            </button>
                            {isAdmin && (
                                <Link to={`/edit-blog/${blog._id}`} className="px-4 py-2 bg-black text-white rounded-full text-sm font-bold hover:bg-gray-800 transition-colors shadow-md">
                                    Edit Post
                                </Link>
                            )}
                        </div>
                    </div>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-12">
                        {blog.description}
                    </div>

                    {/* Affiliate Link if exists */}
                    {blog.affiliateUrl && (
                        <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 mb-12 flex flex-col items-center text-center">
                            <h3 className="text-xl font-bold mb-4">Interested in this product?</h3>
                            <a 
                                href={blog.affiliateUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-black text-white font-black rounded-full hover:scale-105 transition-transform shadow-xl"
                            >
                                Get it Now
                            </a>
                        </div>
                    )}

                    {/* Hashtags */}
                    <div className="flex flex-wrap gap-3">
                        {blog.hashtags && (Array.isArray(blog.hashtags) ? blog.hashtags : blog.hashtags.split(' ')).map((tag, idx) => (
                            <span key={idx} className="flex items-center gap-1 text-blue-600 font-semibold hover:underline cursor-pointer">
                                <Tag size={14} /> {tag.startsWith('#') ? tag : `#${tag}`}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </main>
        </div>
    );
};

export default SingleBlog;
