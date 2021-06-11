import axios from 'axios';

const API = axios.create({ baseURL: 'https://share-study-heroku.herokuapp.com/' });

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);