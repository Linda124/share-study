//import { AccordionSummary } from '@material-ui/core';
import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:3000' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req;
  });

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
export const fetchReviews = () => API.get('/CS2030Sreviews');
export const createReview = (newReview) => API.post('/CS2030Sreviews', newReview);
export const updateReview = (id, updatedPost) => API.patch(`/CS2030Sreviews/${id}`, updatedPost);
export const deleteReview = (id) => API.delete(`/CS2030Sreviews/${id}`);
export const likeReview = (id) => API.patch(`/CS2030Sreviews/${id}/likeReview`);
//update this part later 1.15.39  