import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:5000/api',
});

// Set token in headers
API.interceptors.request.use((config) => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (userInfo && userInfo.token) {
        config.headers.Authorization = `Bearer ${userInfo.token}`;
    }
    return config;
});

export const fetchBlogs = () => API.get('/blogs');
export const createBlog = (blogData) => API.post('/blogs', blogData);
export const deleteBlog = (id) => API.delete(`/blogs/${id}`);

export const login = (email, password) => API.post('/users/login', { email, password });
export const signup = (userData) => API.post('/users/signup', userData);

export default API;
