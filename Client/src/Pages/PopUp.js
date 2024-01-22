import React, { useState, useRef, useEffect } from 'react';
import "./PopUp.css";

const SERVER = 'https://fanaticaldetailing.com/api'
// const SERVER = 'http://localhost:8080/api'

const PopUp = ({setPopUp, popUp, selected}) =>{
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const isMobileDevice = /Mobi/i.test(window.navigator.userAgent)
    const [loading, setLoading] = useState(false);

    useEffect(() => {


    }, [popUp]);

    const menuRef = useRef();

    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }


    useEffect(() => {
        document.querySelector('.centerer').style.top += `${window.scrollY}px`; 

        let handler = (e) => {
    
          if (!menuRef.current.contains(e.target)) {
            setPopUp(false);
          }
        };
        document.addEventListener("mousedown", handler);
    
        // Cleanup the event listener on component unmount
        return () => {
          document.removeEventListener("mousedown", handler);
        };
      }, [popUp]);

      function handleSubmit(){

        if(firstName === "" || lastName === "" || email === "" || phone === ""){
            return;
        }

        if (!isValidEmail(email)) {
          alert('Invalid Email Detected');
          return
        } 

        let form = document.querySelector('.option2');
        let title = document.getElementById('thankYou');

        const data = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            service: selected,
        };
        
        setLoading(true)

        try{
            fetch(`${SERVER}/interest`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({data})
              })
              .then((res) => res.json())
              .then((data)=>{
                if(data.success){
                    setLoading(false)
                    form.style.display = 'none';
                    title.style.display = 'flex';
                }
              });
        }
        catch{
            alert("Something went wrong on our end. Please try again later")
            return;
        }
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

    return(
        <div id='blur'>
          <div className='centerer'>
            <div id='content'ref={menuRef}>
                  <div className='header'>
                      <h2>Schedule an Appointment</h2>
                      <p className='sub-header'>{selected}</p>
                  </div>
                  <div className='content'>
                      <div className='call'>
                          <a className="call-btn" href="tel:5614006355">
                              <i className="fa-solid fa-phone"></i>
                              <p>561-400-6355</p>
                          </a>
                          <p className='warning'>Call or Text Now!</p>
                      </div>

                      <div className='center'>  <div className='line'></div>  <p>or</p>  <div className='line'></div>  </div>
                      
                      <div className='option2'>
                          <div className={loading ? 'loading': 'inputs'}>
                              <div className='name'>
                                  <input type="text" onChange={updateFN} placeholder='First Name*' value={firstName} required/>
                                  <input type="text" onChangeCapture={updateLN} placeholder='Last Name*' value={lastName} required/>
                              </div>
                              <input type="text" onChange={updateEmail} placeholder='Email*' value={email} required/>
                              <input type="text" onChange={updatePhone} placeholder='Phone*' value={phone} required/>
                              {loading ? 
                              <div className='parameters'>
                                <span class="material-symbols-outlined">progress_activity</span>
                              </div>:
                              null
                              }
                          </div>
                          <input type='submit' onClick={handleSubmit} className='submit-btn' value={'Submit'}/>
                      </div>

                      <div id="thankYou">
                          <h2>Thank you</h2>
                          <p className="warning">Please check your Junk mail if you do not recieve a confirmation email in the next few minutes.</p>
                          <p>Our team is excited to make your car look good!</p>
                      </div>
                  </div>
                  <div className='footer'>
                      <button className='cancel' onClick={() => setPopUp(false)}>
                          <div className='container'>
                              <p>I <i class="fa-regular fa-heart"></i> Dirty Cars</p> 
                          </div>
                          <i class="fa-solid fa-chevron-left"></i>
                          </button>
                  </div>
            </div>
          </div>
        </div>
    )
}

export default PopUp;