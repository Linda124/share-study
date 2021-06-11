import * as actionTypes from "../constants/courseConstants";

export const getCoursesReducer = (state = { courses: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_COURSES_REQUEST:
      return {
        loading: true,
        courses: [],
      };
    case actionTypes.GET_COURSES_SUCCESS:
      return {
        courses: action.payload,
        loading: false,
      };
    case actionTypes.GET_COURSES_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getCourseDetailsReducer = (state = { course: {} }, action) => {
  switch (action.type) {
    case actionTypes.GET_COURSE_DETAILS_REQUEST:
      return {
        loading: true,
      };
    case actionTypes.GET_COURSE_DETAILS_SUCCESS:
      return {
        loading: false,
        course: action.payload,
      };
    case actionTypes.GET_COURSE_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.GET_COURSE_DETAILS_RESET:
      return {
        course: {},
      };
    default:
      return state;
  }
};