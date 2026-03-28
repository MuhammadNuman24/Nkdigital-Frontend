import axios from 'axios';

const API = axios.create({
    baseURL: window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' 
        ? 'http://localhost:5000/api' 
        : 'https://nkdigital-backend.vercel.app/api',
});

// Set token in headers
API.interceptors.request.use((config) => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (userInfo && userInfo.token) {
        config.headers.set('Authorization', `Bearer ${userInfo.token}`);
    }
    return config;
});

export const fetchBlogs = () => API.get('/blogs');
export const fetchBlog = (id) => API.get(`/blogs/${id}`);
export const createBlog = (blogData) => API.post('/blogs', blogData);
export const updateBlog = (id, blogData) => API.put(`/blogs/${id}`, blogData);
export const deleteBlog = (id) => API.delete(`/blogs/${id}`);

export const login = (email, password) => API.post('/users/login', { email, password });
export const signup = (userData) => API.post('/users/signup', userData);
export const updateProfile = (userData) => API.put('/users/profile', userData);

export default API;
