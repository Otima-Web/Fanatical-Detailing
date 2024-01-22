import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, {useState} from 'react';

import './App.css';
import Home from './Pages/Home/Home';
import Service from './Pages/Services';
import About from './Pages/About';

import Navbar from './Nav/Navbar';
import Footer from './Nav/Footer';

function App() {
  const [prev, setPrev] = useState(0);
  const isMobileDevice = /Mobi/i.test(window.navigator.userAgent)

  function navPos(e){
          const navBar = document.getElementById('navbar');
      
          if(e.oldScroll > e.scrollY){
              if(prev>0){
                  setPrev(prev-1)
              }
          }
          else{
              if(prev<30){
                  setPrev(prev+1);
              }
          }
    
          if(window.scrollY<200){
              setPrev(0)
          }
    
          if(prev>=0){
              navBar.style.top = `-${prev*5}px`;
          }
    
          e.oldScroll = e.scrollY;
  }

  function popPos(e){
    try{
      const popUp = document.querySelector('.centerer');

      if(e.scrollY < 1500){
        popUp.style.top = `${e.scrollY}px`; 
      }
    }
    catch{
      return
    }
  }
    
  window.onscroll = function(e) {
    navPos(this)
    if(!isMobileDevice){
      popPos(this)
    }
  }
  return (
    <>
    <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/services' element={<Service/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
