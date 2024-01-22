import React, {useState} from "react";
import "./Section4.css"

const SERVER = 'http://fanaticaldetailing.com/api'
// const SERVER = 'http://localhost:8080/api'

function Section4(){
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [addInfo, setAddInfo] = useState("");
    const [hearFrom, setHearFrom] = useState("Social Media");

    const [engine, setEngine] = useState(false);
    const [wash, setWash] = useState(false);
    const [vaccum, setVaccum] = useState(false);
    const [interior, setInterior] = useState(false);
    const [ceramic, setCeramic] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(firstName === "" || lastName === "" || email === "" || phone === ""){
            return;
        }

        let form = document.getElementById('right');
        let title = document.getElementById('thankYou');
        let verification = document.querySelector('#interest-Form');
        let captcha;
        try{
            captcha = document.querySelector('#g-recaptcha-response').value;
        }
        catch{
            alert("oops... looks like Something may have gone wrong on our end. Please try refreshing the browser.")
            verification.style = 'animation: pop 1s linear 0s infinite alternate;'
            return;
        }

        const data = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            addInfo: addInfo,
            origin: hearFrom,

            engine: (engine ? "Engine Bay Cleaning" : ""),
            wash: (wash ? "Wash" : ""),
            vaccum: (vaccum ? "Vaccum" : ""),
            interior: (interior ? "Interior Cleaning" : ""),
            ceramic: (ceramic ? "Ceramic Coating" : ""),

            captcha: captcha
        };

        try{
            fetch(`${SERVER}/mail`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({data})
              })
              .then((res) => res.json())
              .then((data)=>{
                if(!data.success){
                    verification.style = 'animation: pop 1s linear 0s infinite alternate;'
                }
                else{
                    form.style.display = 'none';
                    title.style.display = 'flex';
                }
              });
        }
        catch{
            alert("Something went wrong on our end. Please try again later")
            return;
        }
        
        // emailjs.init("SHVR7fKbB9AkOyMWz");
        // emailjs.send("service_0pvh9tj","Fanatical", data);
      }

      const updateFN = (e) => {
        setFirstName(e.target.value);
      }
      const updateLN = (e) => {
        setLastName(e.target.value);
      }
      const updateEmail = (e) => {
        setEmail(e.target.value);
      }
      const updatePhone = (e) => {
        setPhone(e.target.value);
      }
      const updateAddInfo = (e) => {
        setAddInfo(e.target.value);
      }

      const saveInterest = (e) =>{
        let tag = e.target.name;

        switch(tag){
            case "engine":
                setEngine(!engine);
                break;
            case "wash":
                setWash(!wash);
                break;
            case "vaccum":
                setVaccum(!vaccum);
                break;
            case "interior":
                setInterior(!interior);
                break;
            case "coating":
                setCeramic(!ceramic);
                break;
            default:
                break;
        }
      }

    return(
        <div id="Section4">
            <div className="image">
                <div className="imager">
                    <img src="images/RR.jpg" alt="" />
                </div>
                <div className="tags">
                    <a href="https://www.instagram.com/fanaticaldetailing/?hl=en">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a className="call-btn" href="tel:5614006355">
                        <i className="fa-solid fa-phone"></i>
                        <p>561-400-6355</p>
                    </a>
                </div>
            </div>

            <div id="right">
                <h2>Interested? Contact Us</h2>
                <form method="POST" onSubmit={handleSubmit}>
                    <div className="name">
                        <input type="text" placeholder="First Name" onChange={updateFN} value={firstName} required />
                        <input type="text" placeholder="Last Name" onChange={updateLN} value={lastName} required/>
                    </div>
                    <div className="email">
                        <input type="text" placeholder="Email" onChange={updateEmail} value={email} />
                    </div>
                    <div className="phone">
                        <input type="tel" placeholder="Phone # i.e. 5614006355" onChange={updatePhone} value={phone}/>
                    </div>
                    <div className="info">
                        <h4>How did Your Hear About Us?</h4>
                        <select name="services" id="services">
                            <option value="Aocial Media" onSelect={(e)=>{setHearFrom(e.target.value)}}>Social Media</option>
                            <option value="Referral" onSelect={(e)=>{setHearFrom(e.target.value)}}>Referral</option>
                            <option value="Returning Customer" onSelect={(e)=>{setHearFrom(e.target.value)}}>Returning Customer</option>
                            <option value="Other" onSelect={(e)=>{setHearFrom(e.target.value)}}>Other</option>
                        </select> 
                    </div>
                    <div className="selections">
                        <h4> Which are Your Interested In</h4>
                        <section>
                            <div className="box">
                                <input type="checkbox" name="wash" onClick={saveInterest}/>
                                <p>Wash</p>
                            </div>
                            <div className="box">
                                <input type="checkbox" name="vaccum" onClick={saveInterest}/>
                                <p>Vaccum</p>
                            </div>
                            <div className="box">
                                <input type="checkbox" name="interior" onClick={saveInterest}/>
                                <p>Interior Clean</p>
                            </div>
                            <div className="box">
                                <input type="checkbox" name="engine" onClick={saveInterest}/>
                                <p>Engine Bay Cleaning</p>
                            </div>
                            <div className="box">
                                <input type="checkbox" name="coating" onClick={saveInterest}/>
                                <p>Ceramic Coating</p>
                            </div>
                        </section>
                    </div>
                    <div className="addInfo">
                        <textarea value={addInfo} onChange={updateAddInfo} placeholder="Additional Information"/>
                    </div>
                    <div id="interest-Form">
                        <div class="g-recaptcha" data-sitekey='6Le1NkEpAAAAADPjaN_43dWnRFCVL0DG4NDq-ZRE'></div>
                    </div>
                    <button >Submit</button>
                </form>

                <section>

                </section>
            </div>

            <div id="thankYou">
                <h2>Thank you</h2>
                <p className="warning">Please check your Junk mail if you do not recieve a confirmation email in the next few minutes.</p>
                <p>Our team is excited to make your car look good!</p>
            </div>
        </div>
    );
}

export default Section4;