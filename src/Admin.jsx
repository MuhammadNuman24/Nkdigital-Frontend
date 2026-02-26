import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { createBlog } from './api';
import { Upload, Plus, Trash2 } from 'lucide-react';

const Admin = () => {
    const [formData, setFormData] = useState({
        title: '',
        imageUrl: '',
        category: 'Fashion',
        type: 'blog',
        affiliateUrl: '',
        author: 'Admin'
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const categories = ['Fashion', 'Beauty', 'Pet', 'Jewelry', 'Home Decor'];

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await createBlog(formData);
            setSuccess(true);
            setFormData({
                title: '',
                imageUrl: '',
                category: 'Fashion',
                type: 'blog',
                affiliateUrl: '',
                author: 'Admin'
            });
            setTimeout(() => setSuccess(false), 3000);
        } catch (error) {
            alert('Error creating blog: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen pt-24 pb-12 bg-gray-50">
            <Navbar />

            <div className="max-w-4xl mx-auto px-4">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
                    {/* Preview Side */}
                    <div className="w-full md:w-1/2 bg-gray-100 p-8 flex flex-col justify-center items-center">
                        {formData.imageUrl ? (
                            <img
                                src={formData.imageUrl}
                                alt="Preview"
                                className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
                            />
                        ) : (
                            <div className="w-full h-[400px] border-4 border-dashed border-gray-300 rounded-2xl flex flex-col items-center justify-center text-gray-400">
                                <Upload className="w-12 h-12 mb-2" />
                                <p className="font-medium text-sm">Image Preview</p>
                            </div>
                        )}
                        <div className="mt-4 w-full text-center">
                            <h3 className="font-bold text-xl">{formData.title || 'Untitled Post'}</h3>
                            <p className="text-gray-500">{formData.category} • {formData.type}</p>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="w-full md:w-1/2 p-8">
                        <h2 className="text-3xl font-black mb-6 tracking-tight">Create Dynamic Post</h2>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Title</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Enter a catchy title"
                                    className="w-full bg-gray-100 border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                    value={formData.title}
                                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Image URL</label>
                                <input
                                    type="url"
                                    required
                                    placeholder="Paste image link from Unsplash/etc."
                                    className="w-full bg-gray-100 border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                    value={formData.imageUrl}
                                    onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Category</label>
                                    <select
                                        className="w-full bg-gray-100 border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                        value={formData.category}
                                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                    >
                                        {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Type</label>
                                    <select
                                        className="w-full bg-gray-100 border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                        value={formData.type}
                                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                                    >
                                        <option value="blog">Blog</option>
                                        <option value="product">Product</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Affiliate Link (Optional)</label>
                                <input
                                    type="url"
                                    placeholder="Amazon, Etsy, etc."
                                    className="w-full bg-gray-100 border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                    value={formData.affiliateUrl}
                                    onChange={(e) => setFormData({ ...formData, affiliateUrl: e.target.value })}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all active:scale-95 disabled:opacity-50 flex items-center justify-center gap-2"
                            >
                                {loading ? 'Publishing...' : (
                                    <>
                                        <Plus className="w-5 h-5" />
                                        Publish Post
                                    </>
                                )}
                            </button>

                            {success && (
                                <p className="text-green-500 text-center font-bold animate-bounce mt-4">Published successfully! ✨</p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;
