import React from 'react';
import "./MiddlePage.css";

import Option from '../Option/Option';
import Option1 from '../Option/Option1';
import Option2 from '../Option/Option2';



const MiddlePage = () => {

    return  <div className = "middlePage">
            <div className = "middlePage__courses">
            <Option />
            <Option1 />
            <Option2/>
            </div>
    </div>;
     

};

export default MiddlePage;
