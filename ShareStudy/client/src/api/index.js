import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:3000' });


API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req;
  });

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
export const fetchReviews = () => API.get('/CS2030Sreviews');
export const createReview = (newReview) => API.post('/CS2030Sreviews', newReview);
export const updateReview = (id, updatedReview) => API.patch(`/CS2030Sreviews/${id}`, updatedReview);
export const deleteReview = (id) => API.delete(`/CS2030Sreviews/${id}`);
export const likeReview = (id) => API.patch(`/CS2030Sreviews/${id}/likeReview`);

export const getFiles = () => API.get(`/getAllFiles`);
export const downloadFile = (id) => API.get(`/download/${id}`, { responseType: 'blob'} );
export const deleteFile = (id) => API.delete(`/delete/${id}`, { });


export const API_URL = 'http://localhost:3000';