import React from 'react';
import "./Home.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Course from '../Course/Course';

import { getCourses as listCourses} from "../../actions/courseActions";

const Home = () => {
    const dispatch = useDispatch();

    const getCourses = useSelector((state) => state.getCourses);
    const { courses, loading, error } = getCourses;

    useEffect(() => {
      dispatch(listCourses());
    }, [dispatch]);
     
     return (
        <div className="home">
          <div className="home__courses">
          {loading ? (
              <h2>Loading...</h2>
            ) : error ? (
              <h2>{error}</h2>
            ) : (
              courses.map((course) => 
                <Course
                  key={course._id}
                  courseId={course._id}
                  name={course.name}
                  description={course.description}
                  imageUrl={course.imageUrl}
                />)
            )}
          </div>
        </div>
      );
};

export default Home;
