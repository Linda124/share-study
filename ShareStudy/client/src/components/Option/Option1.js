import React from 'react';
import './Option.css';
import {Link} from 'react-router-dom';

const Option1 = ( {courseId}) => {
    return( 
        <div className = "option">
            <img src= "https://i.postimg.cc/GpWmXQsK/Screenshot-2021-06-11-at-10-14-05-AM.png" alt="review"/>

        <div className = "option_info">
                <Link to={`/CS2030Sreviews`}className = "info__button">Module Reviews</Link>
            </div>
        </div>
    )
}

export default Option1;