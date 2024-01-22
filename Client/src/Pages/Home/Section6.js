import React from "react";
import { Link } from 'react-router-dom';

import './Section6.css'

function Section6(){

    return(
        <div className="about-funnel">
            <h2>About Us</h2>
            <div className="about">
                <p>Fanatical Detailing is a premier mobile detailing service offering unparalleled convenience and quality.
                     Our skilled professionals use top-of-the-line products to revive and maintain your vehicles appearance. 
                     We prioritize customer satisfaction by providing personalized, meticulous cleaning for both interiors and 
                     exteriors. With our mobile units, we bring our expertise directly to you, ensuring professional and reliable 
                     service wherever you are. Experience the difference with Fanatical Detailing-let us exceed your detailing
                      expectations today!
                </p>
                <Link to="/about" className="transfer"> Learn More</Link>
            </div>
        </div>
    );
}

export default Section6;