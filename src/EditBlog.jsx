import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import { fetchBlog, updateBlog } from './api';
import { Upload, Save, Hash, ArrowLeft } from 'lucide-react';

const EditBlog = () => {
    const { id } = useParams();
    const navigate = useNavigate();
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
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [success, setSuccess] = useState(false);

    const categories = ['Fashion', 'Beauty', 'Pet', 'Jewelry', 'Home Decor'];

    useEffect(() => {
        const getBlog = async () => {
            try {
                const { data } = await fetchBlog(id);
                setFormData({
                    ...data,
                    hashtags: data.hashtags ? (Array.isArray(data.hashtags) ? data.hashtags.join(', ') : data.hashtags) : ''
                });
            } catch (error) {
                console.error('Error fetching blog:', error);
                alert('Error fetching blog');
            } finally {
                setLoading(false);
            }
        };
        getBlog();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSaving(true);
        try {
            const blogData = {
                ...formData,
                hashtags: formData.hashtags.split(',').map(tag => tag.trim()).filter(tag => tag !== '')
            };
            await updateBlog(id, blogData);
            setSuccess(true);
            setTimeout(() => {
                setSuccess(false);
                navigate(`/blog/${id}`);
            }, 2000);
        } catch (error) {
            alert('Error updating blog: ' + error.message);
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen pt-24 pb-12 bg-gray-50 flex justify-center items-center">
                <Navbar />
                <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-24 pb-12 bg-gray-50">
            <Navbar />

            <div className="max-w-6xl mx-auto px-4">
                <button 
                    onClick={() => navigate(`/blog/${id}`)}
                    className="flex items-center gap-2 text-gray-500 hover:text-black mb-6 transition-colors"
                >
                    <ArrowLeft className="w-5 h-5" />
                    Back to Blog
                </button>

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
                                {formData.hashtags && formData.hashtags.split(',').map((tag, i) => tag.trim() && (
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
                            <Save className="w-8 h-8 text-primary" />
                            Edit Post
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
                                disabled={saving}
                                className="w-full bg-primary text-white font-bold py-4 rounded-2xl shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all active:scale-95 disabled:opacity-50 flex items-center justify-center gap-2 text-lg"
                            >
                                {saving ? 'Saving...' : (
                                    <>
                                        <Save className="w-6 h-6" />
                                        Save Changes
                                    </>
                                )}
                            </button>

                            {success && (
                                <div className="bg-green-50 text-green-600 font-bold p-4 rounded-2xl text-center animate-bounce">
                                    Changes Saved Successfully! ✨
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditBlog;
