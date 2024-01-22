import React from "react";
import { Link } from 'react-router-dom';
import './Section3.css'

function Section3(){

    return(
        <div id="Section3">
            <h2>Packages</h2>
            <section className="tears">
                <div className="tear">
                    <div className="top"> 
                        <p>Diamond</p>
                    </div>
                    <div className="bottom">
                        <p>$325</p>
                    </div>
                </div>
                <div className="tear">
                    <div className="top"> 
                        <p>Gold</p>
                    </div>
                    <div className="bottom">
                        <p>$225</p>
                    </div>
                </div>
                <div className="tear">
                    <div className="top"> 
                        <p>Silver</p>
                    </div>
                    <div className="bottom">
                        <p>$125</p>
                    </div>
                </div>
                <div className="tear">
                    <div className="top"> 
                        <p>Bronze</p>
                    </div>
                    <div className="bottom">
                        <p>$100</p>
                    </div>
                </div>
            </section>
            <Link className="more-btn" to='/services'>
                <p>Learn More</p>
            </Link>
        </div>
    );
}

export default Section3;