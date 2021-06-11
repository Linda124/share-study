import React from 'react';
import './Course.css';
import {Link} from 'react-router-dom';

const Course = ( { imageUrl, name, description, courseId } ) => {
    return( 
        <div className = "course">
            <img src={imageUrl} alt={name} />

        <div className = "course_info">
            <p className = "course_name">{name}</p>
            <p className = "course_description">{description}</p>
            
                <Link to={`/course/${courseId}`}className = "info__button">View</Link>
            </div>
        </div>
    )
}

export default Course;
//<img className={classes.image} src={ss} alt="ss" height="120" />
// <img src={module} alt="module"/>
//img className="course" 