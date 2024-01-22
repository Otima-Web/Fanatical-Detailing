import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from "../Button";

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () =>{
        setClick(!click);
    } 
    const closeMobileMenu = () =>{
        setClick(false);
    } 

    const showButton = () => {
        if (window.innerWidth <= 960) {
          setButton(false);
        } else {
          setButton(true);
        }
      };

    window.addEventListener('resize', showButton);

    return(
        <>
        <nav id='navbar'>
            <div className='container' >
                <Link to='/' className='logo' onClick={closeMobileMenu}>
                    <img src="images/logo.PNG" alt="" />
                </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times':'fas fa-bars'} />
            </div>
            <ul className={!click ? 'hidden-nav-menu' : 'nav-menu'}>
                <li className='mobile-menu' onClick={closeMobileMenu}>
                {<Button path="/services" buttonStyle ="mobile" >Services</Button>}

                </li>
                <li className='mobile-menu' onClick={closeMobileMenu}>
                {<Button onClick={closeMobileMenu} path="/about" buttonStyle ="mobile" >About Us</Button>}
                </li>
                <li className='mobile-menu' >
                {<Button onClick={closeMobileMenu} path="tel:5614006355" buttonStyle ="mobile" > <span class="material-symbols-outlined">phone_in_talk</span>Call Now</Button>}
                </li>
                
            </ul>

            <ul className='menu'>
                <li >
                    {button && <Button path="/Services" buttonStyle ="Section" >Services</Button>}
                </li>

                 <li >
                    {button && <Button path="/about" buttonStyle ="Section" >About Us</Button>}
                </li>               
            </ul>
            
            </div>
        </nav>
        </>
    );
}

export default Navbar;