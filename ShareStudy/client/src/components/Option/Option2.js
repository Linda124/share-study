import React from 'react';
import './Option.css';
import {Link} from 'react-router-dom';

const Option2 = () => {
    return( 
        <div className = "option">
            <img src= "https://i.postimg.cc/6qYwxLTD/Screenshot-2021-06-11-at-10-15-54-AM.png" alt="buddy"/>

        <div className = "option_info">
                <Link to={`/CS2030Sbuddy`}className = "info__button">Study Buddy Matching</Link>
            </div>
        </div>
    )
}

export default Option2;