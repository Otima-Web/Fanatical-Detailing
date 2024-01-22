import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import Button from "../Button";

function Footer() {
    return(
        <>
        <nav id='footer'>
            <section className='container'>
                <div className='logo'>
                    <i>[Logo]</i>
                </div>
            </section>
            <section className='container'>
                <h2>Wash Services</h2>
                    <ul className='grid'>
                        <a href="">Diamond</a>
                        <a href="">Gold</a>
                        <a href="">Silver</a>
                        <a href="">Bronze</a>
                    </ul>
            </section>
            <section className='container'>
                <h2>A La Carte</h2>
                    <ul className='grid'>
                        <a href="">Engine Bay Cleaning</a>
                        <a href="">Air Freshner</a>
                        <a href="">Paint Protection Coatings</a>
                    </ul>
            </section>       
            <section className='container'>
                <div className='creator'>
                    <a href='https://brianfarias.info'>BF</a>
                    <div className='seperator'></div>
                    <p>Created by Brian Farias</p>
                </div>
            </section>    
        </nav>
        </>
    );
}

export default Footer;