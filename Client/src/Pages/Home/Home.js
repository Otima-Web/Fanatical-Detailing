import React, {useRef} from 'react';

import LandingPic from './landingPic';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';

function Home() {
    const button = useRef(null);

    function scroll(){
        const section1 = document.getElementById('LP').offsetHeight;
        const section2 = document.getElementById('Section1').offsetHeight;
        const section3 = document.getElementById('Section2').offsetHeight;
        const section4 = document.getElementById('Section3').offsetHeight;

        window.scrollTo({
            top: section1+section2+section3+section4,
            left: 0,
            behavior: "smooth",
          });
          button.current.style = 'right:-100%;';
    }    

    return(
        <>
        <div className='window'>
            <button ref={button} onClick={scroll} className='constant'>
                <span class="material-symbols-outlined">calendar_month</span> <p>Book</p>
            </button>
            <LandingPic />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section6 />
            <Section5 />
        </div>
        </>
    );
}

export default Home;