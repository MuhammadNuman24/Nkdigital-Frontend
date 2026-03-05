import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { createBlog, updateProfile } from './api';
import { Upload, Plus, Trash2, Key, Hash, FileText } from 'lucide-react';

const Admin = () => {
    const [formData, setFormData] = useState({
        title: '',
        imageUrl: '',
        category: 'Fashion',
        type: 'blog',
        affiliateUrl: '',
        author: 'Admin',
        description: '',
        hashtags: ''
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const [passwordData, setPasswordData] = useState({
        password: '',
        confirmPassword: ''
    });
    const [passLoading, setPassLoading] = useState(false);
    const [passSuccess, setPassSuccess] = useState(false);

    const categories = ['Fashion', 'Beauty', 'Pet', 'Jewelry', 'Home Decor'];

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            // Split hashtags by comma and trim
            const blogData = {
                ...formData,
                hashtags: formData.hashtags.split(',').map(tag => tag.trim()).filter(tag => tag !== '')
            };
            await createBlog(blogData);
            setSuccess(true);
            setFormData({
                title: '',
                imageUrl: '',
                category: 'Fashion',
                type: 'blog',
                affiliateUrl: '',
                author: 'Admin',
                description: '',
                hashtags: ''
            });
            setTimeout(() => setSuccess(false), 3000);
        } catch (error) {
            alert('Error creating blog: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    const handlePasswordUpdate = async (e) => {
        e.preventDefault();
        if (passwordData.password !== passwordData.confirmPassword) {
            alert("Passwords don't match");
            return;
        }
        setPassLoading(true);
        try {
            await updateProfile({ password: passwordData.password });
            setPassSuccess(true);
            setPasswordData({ password: '', confirmPassword: '' });
            setTimeout(() => setPassSuccess(false), 3000);
        } catch (error) {
            alert('Error updating password: ' + error.message);
        } finally {
            setPassLoading(false);
        }
    };

    return (
        <div className="min-h-screen pt-24 pb-12 bg-gray-50">
            <Navbar />

            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Side: Create Blog Form */}
                <div className="lg:col-span-2">
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
                        {/* Preview Side */}
                        <div className="w-full md:w-2/5 bg-gray-100 p-8 flex flex-col justify-center items-center">
                            {formData.imageUrl ? (
                                <img
                                    src={formData.imageUrl}
                                    alt="Preview"
                                    className="w-full h-[300px] object-cover rounded-2xl shadow-lg border-4 border-white"
                                />
                            ) : (
                                <div className="w-full h-[300px] border-4 border-dashed border-gray-300 rounded-2xl flex flex-col items-center justify-center text-gray-400">
                                    <Upload className="w-12 h-12 mb-2" />
                                    <p className="font-medium text-sm text-center px-4">Image Preview will appear here</p>
                                </div>
                            )}
                            <div className="mt-6 w-full">
                                <h3 className="font-black text-xl leading-tight line-clamp-2">{formData.title || 'Untitled Post'}</h3>
                                <p className="text-primary font-bold mt-1 uppercase text-xs tracking-widest">{formData.category}</p>
                                <div className="flex flex-wrap gap-2 mt-3">
                                    {formData.hashtags.split(',').map((tag, i) => tag.trim() && (
                                        <span key={i} className="bg-white px-2 py-1 rounded-lg text-[10px] font-bold text-gray-500 shadow-sm border border-gray-100">
                                            #{tag.trim()}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Form Side */}
                        <div className="w-full md:w-3/5 p-8">
                            <h2 className="text-3xl font-black mb-6 tracking-tight flex items-center gap-3">
                                <Plus className="w-8 h-8 text-primary" />
                                Create Post
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="md:col-span-2">
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1.5 ml-1">Title</label>
                                        <input
                                            type="text"
                                            required
                                            placeholder="Enter a catchy title"
                                            className="w-full bg-gray-50 border-2 border-transparent focus:border-primary/20 rounded-2xl py-3.5 px-5 outline-none transition-all font-medium"
                                            value={formData.title}
                                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1.5 ml-1">Category</label>
                                        <select
                                            className="w-full bg-gray-50 border-2 border-transparent focus:border-primary/20 rounded-2xl py-3.5 px-5 outline-none transition-all font-medium appearance-none"
                                            value={formData.category}
                                            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                        >
                                            {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1.5 ml-1">Type</label>
                                        <select
                                            className="w-full bg-gray-50 border-2 border-transparent focus:border-primary/20 rounded-2xl py-3.5 px-5 outline-none transition-all font-medium appearance-none"
                                            value={formData.type}
                                            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                                        >
                                            <option value="blog">Blog</option>
                                            <option value="product">Product</option>
                                        </select>
                                    </div>

                                    <div className="md:col-span-2">
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1.5 ml-1">Image URL</label>
                                        <input
                                            type="url"
                                            required
                                            placeholder="https://images.unsplash.com/..."
                                            className="w-full bg-gray-50 border-2 border-transparent focus:border-primary/20 rounded-2xl py-3.5 px-5 outline-none transition-all font-medium"
                                            value={formData.imageUrl}
                                            onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                                        />
                                    </div>

                                    <div className="md:col-span-2">
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1.5 ml-1">Description</label>
                                        <textarea
                                            rows="4"
                                            placeholder="Tell your story..."
                                            className="w-full bg-gray-50 border-2 border-transparent focus:border-primary/20 rounded-2xl py-3.5 px-5 outline-none transition-all font-medium resize-none"
                                            value={formData.description}
                                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                        ></textarea>
                                    </div>

                                    <div className="md:col-span-2">
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1.5 ml-1">Hashtags (comma separated)</label>
                                        <div className="relative">
                                            <Hash className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                            <input
                                                type="text"
                                                placeholder="fashion, beauty, style..."
                                                className="w-full bg-gray-50 border-2 border-transparent focus:border-primary/20 rounded-2xl py-3.5 pl-11 pr-5 outline-none transition-all font-medium"
                                                value={formData.hashtags}
                                                onChange={(e) => setFormData({ ...formData, hashtags: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div className="md:col-span-2">
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1.5 ml-1">Affiliate Link (Optional)</label>
                                        <input
                                            type="url"
                                            placeholder="https://amazon.com/..."
                                            className="w-full bg-gray-50 border-2 border-transparent focus:border-primary/20 rounded-2xl py-3.5 px-5 outline-none transition-all font-medium"
                                            value={formData.affiliateUrl}
                                            onChange={(e) => setFormData({ ...formData, affiliateUrl: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-primary text-white font-bold py-4 rounded-2xl shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all active:scale-95 disabled:opacity-50 flex items-center justify-center gap-2 text-lg"
                                >
                                    {loading ? 'Publishing...' : (
                                        <>
                                            <Plus className="w-6 h-6" />
                                            Publish Content
                                        </>
                                    )}
                                </button>

                                {success && (
                                    <div className="bg-green-50 text-green-600 font-bold p-4 rounded-2xl text-center animate-bounce">
                                        Content Published Successfully! ✨
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>

                {/* Right Side: Security & Settings */}
                <div className="space-y-8">
                    <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
                        <h3 className="text-xl font-black mb-6 flex items-center gap-2">
                            <Key className="w-5 h-5 text-primary" />
                            Update Password
                        </h3>
                        <form onSubmit={handlePasswordUpdate} className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1.5 ml-1">New Password</label>
                                <input
                                    type="password"
                                    required
                                    placeholder="••••••••"
                                    className="w-full bg-gray-50 border-2 border-transparent focus:border-primary/20 rounded-xl py-3 px-4 outline-none transition-all font-medium"
                                    value={passwordData.password}
                                    onChange={(e) => setPasswordData({ ...passwordData, password: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1.5 ml-1">Confirm Password</label>
                                <input
                                    type="password"
                                    required
                                    placeholder="••••••••"
                                    className="w-full bg-gray-50 border-2 border-transparent focus:border-primary/20 rounded-xl py-3 px-4 outline-none transition-all font-medium"
                                    value={passwordData.confirmPassword}
                                    onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={passLoading}
                                className="w-full bg-black text-white font-bold py-3.5 rounded-xl hover:bg-gray-800 transition-all active:scale-95 disabled:opacity-50"
                            >
                                {passLoading ? 'Updating...' : 'Save Password'}
                            </button>
                            {passSuccess && (
                                <p className="text-green-500 text-sm font-bold text-center mt-2">Password updated! ✅</p>
                            )}
                        </form>
                    </div>

                    <div className="bg-primary/5 rounded-3xl p-8 border border-primary/10">
                        <h4 className="font-bold text-primary mb-2">Admin Pro-Tip</h4>
                        <p className="text-sm text-gray-600 leading-relaxed font-medium">
                            Use high-quality vertical images (9:16) for the best Pinterest-style layout in the feed.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;
