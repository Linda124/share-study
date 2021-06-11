import React from 'react';
import './Option.css';
import {Link} from 'react-router-dom';

const Option = ({courseId}) => {
    return( 
        <div className = "option">
            <img src= "https://i.postimg.cc/rwv0WLcZ/note.png" alt="note"/>

        <div className = "option_info">
                <Link to={`/CS2030Snotes`}className = "info__button">Notes Repository</Link>
            </div>
        </div>
    )
}

export default Option;