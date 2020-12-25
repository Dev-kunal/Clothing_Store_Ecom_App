import React from 'react'
import "../App.css";
import Directory from '../Components/Directory';
import Header from '../Components/Header';

function Homepage() {
    return (
        <div className="homepage">   
            {/* <Header /> */}
            <Directory />
        </div>
    )
}

export default Homepage