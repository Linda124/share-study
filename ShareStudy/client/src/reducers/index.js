import { combineReducers } from 'redux';

import auth from './auth';
import reviews from './reviews';

import {
    getCoursesReducer,
    getCourseDetailsReducer,
  } from "./courseReducers";

// export const reducers = combineReducers({ auth });

export const reducers = combineReducers({
    auth,
    getCourses: getCoursesReducer,
    getCourseDetails: getCourseDetailsReducer,
    reviews,
});

