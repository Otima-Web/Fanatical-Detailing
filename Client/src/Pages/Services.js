import React, {useState} from "react";
import "./Services.css";
import PopUp from "./PopUp"
import PaymentPopUp from "./PaymentPopUp"

function Services(){

    const diamondExterior = ['Pre-Rinse', 'Foam Cannon', 'Microfiber Hand Wash', 'Bug/Tar/Tree Sap Removal', 'Full Wheel Cleaning & Decontamination',
    'Dress Tires & Wheel Wells', 'Chrome/ Trim polish', 'Gas Cap Area Cleaned', 'Premium Microfiber Towel Drying', 'Air Dry Crevices','Paint Decontamination',
    'Paint Polish Restoration','Ceramic Hyper Wax Applied (18-20 weeks)']
    const diamondInterior =['All Surfaces Cleaned + Vacuumed + Protection', 'Seat Cleaning', 'Spot Cleaning', 'Door + Trunck Jams Cleaning', 'Door + Trunck Jams Protection', 'Air Vents + Gauges', 'Cup Holders',
    'Leather/Cloth Conditioning', 'Glass Cleaning'];
    const goldExterior = ['Pre-Rinse', 'Foam Cannon', 'Microfiber Hand Wash', 'Bug/Tar/Tree Sap Removal', 'Full Wheel Cleaning & Decontamination',
    'Dress Tires & Wheel Wells', 'Chrome/ Trim polish', 'Gas Cap Area Cleaned', 'Premium Microfiber Towel Drying', 'Air Dry Crevices','Paint Gloss Spray Wax',
    'Hand Wax Applied (12-16 weeks)'];
    const goldInterior = ['All Surfaces Cleaned + Vacuumed + Protection', 'Seat Cleaning', 'Spot Cleaning', 'Door + Trunck Jams Cleaning', 'Door + Trunck Jams Protection', 'Air Vents + Gauges', 'Cup Holders',
     'Glass Cleaning'];
    const silverExterior = ['Pre-Rinse', 'Foam Cannon', 'Microfiber Hand Wash', 'Bug/Tar/Tree Sap Removal', 'Full Wheel Cleaning & Decontamination',
    'Dress Tires & Wheel Wells', 'Chrome/ Trim polish', 'Gas Cap Area Cleaned', 'Premium Microfiber Towel Drying', 'Air Dry Crevices','Paint Gloss Spray Wax',
    'Hydrophobic Sealent (8-10 weeks)'];
    const silverInterior =['All Surfaces Cleaned + Vacuumed', 'Seat Cleaning', 'Spot Cleaning', 'Door + Trunck Jams Cleaning', 'Air Vents + Gauges', 'Cup Holders',
    'Glass Cleaning'];
    const bronzeExterior =['Pre-Rinse', 'Foam Cannon', 'Microfiber Hand Wash', 'Bug/Tar/Tree Sap Removal', 'Full Wheel Cleaning & Decontamination',
    'Dress Tires & Wheel Wells', 'Chrome/ Trim polish', 'Gas Cap Area Cleaned', 'Premium Microfiber Towel Drying', 'Air Dry Crevices','Paint Gloss Spray Wax'];
    const bronzeInterior =['All Surfaces Cleaned + Vacuumed', 'Seat Cleaning', 'Door + Trunck Jams Cleaning', 'Air Vents + Gauges', 'Cup Holders',
    'Glass Cleaning'];

    const [selected, setSelected] = useState("");
    const [popUp, setPopUp] = useState(false);
    const [payment, setPaymentPopUp] = useState(false);

    function schedule (service){
        setSelected(service);
        setPopUp(true);
    }
    

    return(
        <div className="servicePage">
            {popUp ? 
            <PopUp
            setPopUp = {setPopUp}
            popUp = {popUp}
            selected = {selected}
            />
            : null}

            {payment ? 
            <PaymentPopUp
            setPaymentPopUp = {setPaymentPopUp}
            payment = {payment}
            />
            : null} 

            <h2 className="title">Cleaning Packages</h2>
        <section className="tears">
            <button className="tear" onClick={() => schedule("Diamond")}>
                <div className="tear-blur">
                <div className="top"> 
                    <p>Diamond</p>
                </div>
                <div className="medium">
                    <h3>Exterior</h3>
                    <div className="options">
                        {diamondExterior.map((service) => (
                            <p>{service}</p>
                        ))}
                    </div>
 
                    <h3>Interior</h3>
                    <div className="options">
                        {diamondInterior.map((service) => (
                            <p>{service}</p>
                        ))}              
                    </div>
                </div>
                <div className="bottom">
                    <p>$325</p>
                </div>
                </div>
            </button>
            <button className="tear" onClick={() => schedule("Gold")}>
                <div className="tear-blur">
                <div className="top"> 
                        <p>Gold</p>
                    </div>
                    <div className="medium">
                    <h3>Exterior</h3>
                    <div className="options">
                        {goldExterior.map((service) => (
                            <p>{service}</p>
                        ))}
                    </div>
 
                    <h3>Interior</h3>
                    <div className="options">
                        {goldInterior.map((service) => (
                            <p>{service}</p>
                        ))}              
                    </div>
                    </div>
                    <div className="bottom">
                        <p>$225</p>
                </div>
                </div>
            </button>
            <button className="tear" onClick={() => schedule("Silver")}>
                <div className="tear-blur">
                <div className="top"> 
                    <p>Silver</p>
                </div>
                <div className="medium">
                <h3>Exterior</h3>
                    <div className="options">
                        {silverExterior.map((service) => (
                            <p>{service}</p>
                        ))}
                    </div>
 
                    <h3>Interior</h3>
                    <div className="options">
                        {silverInterior.map((service) => (
                            <p>{service}</p>
                        ))}              
                    </div>
                </div>
                <div className="bottom">
                    <p>$125</p>
                </div>
                </div>
            </button>
            <button className="tear" onClick={() => schedule("Bronze")}>
                <div className="tear-blur">
                <div className="top"> 
                        <p>Bronze</p>
                </div>
                <div className="medium">
                <h3>Exterior</h3>
                    <div className="options">
                        {bronzeExterior.map((service) => (
                            <p>{service}</p>
                        ))}
                    </div>
 
                    <h3>Interior</h3>
                    <div className="options">
                        {bronzeInterior.map((service) => (
                            <p>{service}</p>
                        ))}              
                    </div>
                </div>
                <div className="bottom">
                        <p>$100</p>
                </div>
                </div>
            </button>
        </section>
        <h3 className="addOn">A la Carte</h3>
        <section className="addList">
            <p>Engine Bay Cleaning</p>
            <p>Ceramic Coating</p>
            <p>Air Freshner</p>
        </section>

        <section className="gitcard">
            <div>
                {/* <div className="card" onClick={() =>{setPaymentPopUp(true)}}> */}
                <div className="card">
                    <img src="images/logo.PNG" alt="" />
                </div>

            </div>
            <div>
                <h3>Give the Gift of Fanatical</h3>
                <p className="alert">Coming Soon</p>
            </div>
        </section>
        </div>
    );
}

export default Services;