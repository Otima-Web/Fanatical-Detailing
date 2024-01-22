import React from 'react';
import './Section1.css'

function Section1(){
    return(
        <div id='Section1'>
            <h2>Why Fanatical?</h2>
            
            <div className="tags">
                <div className="tag">
                    <i className="fa fa-arrows-spin"></i>
                    <p> Customer Satisfaction </p>
                </div>
                <div className="tag">
                    <i className="fa-regular fa-star"></i>
                    <p>High Quality Services</p>
                </div>
                <div className="tag">
                    <i className="fa-solid fa-globe"></i>
                    <p>We Come To You</p>
                </div>
                <div className="tag">
                    <i className="fa-solid fa-hand-holding-dollar"></i>
                    <p>Cost Effective</p>
                </div>
                <div className="tag">
                    <i className="fa-regular fa-building"></i>
                    <p> Local Business </p>
                </div>
            </div>

        </div>
    );
}

export default Section1