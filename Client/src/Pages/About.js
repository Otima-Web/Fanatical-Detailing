import React, {useState} from "react";
import "./About.css"

function About(){
    const isMobileDevice = /Mobi/i.test(window.navigator.userAgent)

    const [mission, setMission] = useState(false);
    const [commitment, setCommitment] = useState(false);
    const [story, setStory] = useState(false);

    if(!isMobileDevice){
        return(
            <div id="about">
                <section className="grid-container">
                    <div className="vidPlacement">
                        <video className="video" src="videos/vid1.mp4" autoPlay={true} loop={true} controls={false} playsInline muted></video>
                    </div>
                    <div className="content">    
                        <p className="detail">
                        <h1 className="header">About Us</h1>
                        Fanatical Detailing is a premier mobile detailing service offering unparalleled convenience and quality. 
                        Our skilled professionals use top-of-the-line products to revive and maintain your vehicles appearance. We prioritize customer 
                        satisfaction by providing personalized, meticulous cleaning for both interiors and exteriors. With our mobile units, we bring 
                        our expertise directly to you, ensuring professional and reliable service wherever you are.
                        Experience the difference with Fanatical Detailing-let us exceed your detailing expectations today!
                        </p>

                    </div>
                    <div className="results">
                        <div className="image">
                            <p className="tag">Before</p>
                            <img src="images/before.PNG" alt="" />
                        </div>
                        <div className="image">
                            <p className="tag">After</p>
                            <img src="images/after.PNG" alt="" />
                        </div>
                    </div>

                    <div className="img-container">
                        {/* <img src="images/about1.PNG" alt="" /> */}
                    </div>
                    <div className="location-content">
                        <div className="header">
                            <i className="fa-solid fa-location-dot"></i>
                            <h2> South Florida </h2>
                        </div>
                        <div className="bubble">
                            <h4>Fanatical Detailing</h4>
                            <a href="tel:5614006355">(561) - 400 - 6355</a>
                        </div>
                    </div>
                    <div className="img-container">
                        {/* <img src="images/Lambo.jpg" alt="" /> */}
                    </div>

                    <div className="img-container">
                        <img src="images/F1.jpg" alt="" />
                    </div>
                    <div className="content">    
                        <p className="detail">
                        <h1 className="header">Our Mission</h1>

                        At Fanatical Detailing, we are dedicated to being the foremost authority in premier mobile detailing services,
                         setting the standard for unparalleled convenience and exceptional quality. Our team of skilled professionals 
                         utilizes top-of-the-line products and techniques to revitalize and preserve the appearance of your vehicle. 
                         With an unwavering commitment to customer satisfaction, we provide personalized and meticulous cleaning for 
                         both interior and exterior surfaces. Through our mobile units, we bring forth our expertise directly to your 
                         location, ensuring a professional and dependable service experience, wherever you may be. Fanatical Detailing
                          is committed to exceeding your detailing expectations, delivering transformative results that showcase our 
                          passion for automotive excellence.
                        </p>

                    </div>
                    <div className="img-container">
                        <img src="images/Lambo.jpg" alt="" />
                    </div>

                    <div className="img-container">
                        {/* <img src="images/F1.jpg" alt="" /> */}
                    </div>
                    <div className="content">    
                        <p className="detail">
                        <h1 className="header">Our Commitment</h1>
                        At Fanatical Detailing, our commitment is unwavering. Fueled by our passion for precision in maintaining
                        our personal vehicles, we pledge to deliver the same meticulous care to every customer. Understanding the
                        paramount significance of attention to detail, we dedicate ourselves to extending this passion. We guarantee
                        that every vehicle entrusted to us will receive nothing short of exceptional care and undivided attention.
                        Our commitment is to go above and beyond, ensuring that each car we touch leaves our hands in a state of
                        perfection.
                        </p>

                    </div>
                    <div className="img-container">
                        {/* <img src="images/about1.PNG" alt="" /> */}
                    </div>

                    <div className="img-container">
                    <img src="images/Details/clean1.PNG" alt="" />
                    </div>
                    <div className="content">    
                        <p className="detail">
                        <h1 className="header">Our Story</h1>
                        Founded in 2018 at the age of 14, my entrepreneurial spirit led me to start this business out of a passion
                        for cars and a desire to create something of my own. During that period, I had no car. I constructed a bike
                        trailer to transport essential detailing equipment including buckets, a vacuum, towels, and various products.
                        Day by day I was slowly gaining clientele from nieghbors, family, and friends.  A couple years later we have
                        now grown to a 10+ person team, each person taking pride in their work and customer satisfaction.  
                        With customer Satisfaction being our number one priority, we make sure to go above and beyond treating each
                        vehicle with the same level of care and attention as if it were our own. 
                        </p>

                    </div>
                    <div className="img-container">
                        <img src="images/about1.PNG" alt="" />
                    </div>
                </section>
            </div>
        );
    }
    else{
        return(
            <div id="about">
                <section className="grid-container">
                    <div className="vidPlacement">
                        <div className="scroll">
                            <span class="material-symbols-outlined">touch_app</span>                        
                        </div>
                        <video className="video" src="videos/vid1.mp4" autoPlay={true} loop={true} controls={false} playsInline muted></video>
                    </div>
                    <div className="content">
                        <h1 className="header">About Us</h1>
    
                        <p className="detail">At Fanatical Detailing, we are dedicated to being the foremost authority in premier mobile detailing services, setting the standard for unparalleled convenience and 
                        exceptional quality. Our team of skilled professionals utilizes top-of-the-line products and techniques to revitalize and preserve the appearance of your vehicle. 
                        With an unwavering commitment to customer satisfaction, we provide personalized and meticulous cleaning for both interior and exterior surfaces. Through our mobile 
                        units, we bring forth our expertise directly to your location, ensuring a professional and dependable service experience, wherever you may be. Fanatical Detailing is 
                        committed to exceeding your detailing expectations, delivering transformative results that showcase our passion for automotive excellence.
                        </p>
                    </div>
                    <div className="results">
                        <div className="image" id="top">
                            <p className="tag">Before</p>
                            <img src="images/before.PNG" alt="" />
                        </div>
                        <div className="image" id="bottom">
                            <p className="tag">After</p>
                            <img src="images/after.PNG" alt="" />
                        </div>
                    </div>
                </section>
                <section className="grid-container-bottom">
                    <div className="content">
                        <div className="header">
                            <i className="fa-solid fa-location-dot"></i>
                            <h2> South Florida </h2>
                        </div>
                        <div className="bubble">
                            <h4>Fanatical Detailing</h4>
                            <a href="tel:5614006355">(561)-400-6355</a>
                        </div>
                    </div>
                    <div className="img-container">
                        <img src="images/about1.PNG" alt="" />
                    </div>
                </section>
                <section className="drop-downs">
                    <div className="section">
                        <div className="title">
                            <h3> Our Mission</h3>
                            <span  class='material-symbols-outlined' id="icon" onClick={()=>{setMission(!mission)}}> {mission ? 'arrow_drop_up': 'arrow_drop_down'} </span>
                        </div>
                        <div className={mission ? 'available':'hidden'}>
                            <p className="content">                        
                                At Fanatical Detailing, we are dedicated to being the foremost authority in premier mobile detailing
                            services, setting the standard for unparalleled convenience and exceptional quality. Our team of
                            skilled professionals utilizes top-of-the-line products and techniques to revitalize and preserve
                            the appearance of your vehicle. With an unwavering commitment to customer satisfaction, we provide
                            personalized and meticulous cleaning for both interior and exterior surfaces. Through our mobile
                            units, we bring forth our expertise directly to your location, ensuring a professional and
                            dependable service experience, wherever you may be. Fanatical Detailing is committed to exceeding
                            your detailing expectations, delivering transformative results that showcase our passion for automotive excellence.
                            </p>
                        </div>
                    </div>
                    <div className="section">
                        <div className="title">
                            <h3> Our Story</h3>
                            <span  class='material-symbols-outlined' id="icon" onClick={()=>{setStory(!story)}}> {story ? 'arrow_drop_up': 'arrow_drop_down'} </span>
                        </div>
                        <div className={story ? 'available':'hidden'}>
                            <p className="content">                        
                            Founded in 2018 at the age of 14, my entrepreneurial spirit led me to start this business out of 
                            a passion for cars and a desire to create something of my own. During that period, I had no car. 
                            I constructed a bike trailer to transport essential detailing equipment including buckets, a vacuum
                            , towels, and various products. Day by day I was slowly gaining clientele from nieghbors, family, 
                            and friends.  A couple years later we have now grown to a 10+ person team, each person taking pride 
                            in their work and customer satisfaction.  With customer Satisfaction being our number one priority, 
                            we make sure to go above and beyond treating each vehicle with the same level of care and attention 
                            as if it were our own. 
                            </p>
                        </div>
                    </div>
                    <div className="section">
                        <div className="title">
                            <h3> Our Commitment</h3>
                            <span  class='material-symbols-outlined' id="icon" onClick={()=>{setCommitment(!commitment)}}> {commitment ? 'arrow_drop_up': 'arrow_drop_down'} </span>
                        </div>
                        <div className={commitment ? 'available':'hidden'}>
                            <p className="content">                        
                            At Fanatical Detailing, our commitment is unwavering. Fueled by our passion for precision in maintaining 
                            our personal vehicles, we pledge to deliver the same meticulous care to every customer. Understanding 
                            the paramount significance of attention to detail, we dedicate ourselves to extending this passion. 
                            We guarantee that every vehicle entrusted to us will receive nothing short of exceptional care and 
                            undivided attention. Our commitment is to go above and beyond, ensuring that each car we touch leaves 
                            our hands in a state of perfection.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default About;