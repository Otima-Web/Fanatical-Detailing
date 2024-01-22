import React,{ useState, useEffect }from "react";
import "./Section2.css"
const Review = ["images/Reviews/Review1.jpg", "images/Reviews/Review2.jpg", "images/Reviews/Review3.jpg","images/Reviews/Review4.jpg",
 "images/Reviews/Review5.jpg",  "images/Reviews/Review6.jpg","images/Reviews/Review7.jpg", "images/Reviews/Review8.jpg" ]

function Section2(){
    const [first, setFirst] = useState(Math.floor(Math.random() * (7 - 0 + 1)) + 0);
    const [second, setSecond] = useState(Math.floor(Math.random() * (7 - 0 + 1)) + 0);
    const [third, setThird] = useState(Math.floor(Math.random() * (7 - 0 + 1)) + 0);
    const [selection, setSelection] = useState(Math.floor(Math.random() * (3 - 1 + 1)) + 1);

    useEffect(()=>{
        const intervalId = setInterval(() => {
            var randDisplay = Math.floor(Math.random() * (7 - 0 + 1)) + 0;
            setSelection(Math.floor(Math.random() * (3 - 1 + 1)) + 1);
            
            switch(selection){
                case 1:
                    moveOut();
                    setTimeout(function() {
                        setFirst(randDisplay);
                    }, 500);
                    setTimeout(function() {
                        moveIn();
                    }, 1000);   
                    break;

                case 2:
                    moveOut();
                    setTimeout(function() {
                    setSecond(randDisplay);
                    }, 500);
                    setTimeout(function() {
                        moveIn();
                    }, 1000);                    
                    break;

                case 3:
                    moveOut();
                    setTimeout(function() {
                    setThird(randDisplay);
                    }, 500);
                    setTimeout(function() {
                        moveIn();
                    }, 1000);   
                    break;
            }


          }, 7000);

        return () => {
            // Clean up the interval when the component unmounts
            clearInterval(intervalId);
          };
    }, [selection])


    function moveIn(){
        let container = document.getElementsByClassName('Rcontainer')

        if(window.location.pathname != "/"){
            return;
        }

        container[selection-1].id = "fade-in";

    }

    async function moveOut(){
        let containers = document.getElementsByClassName('Rcontainer')

        if(window.location.pathname != "/"){
            return;
        }

        containers[selection-1].id = "fade-out";
    }

    return(
        <div id="Section2">
            <div className="Rcontainer">
                <img src={Review[first]} alt="" />
            </div>
            <div className="Rcontainer">
                <img src={Review[second]} alt="" />
            </div>
            <div className="Rcontainer">
                <img src={Review[third]} alt="" />
            </div>   
        </div>
    );
}

export default Section2;