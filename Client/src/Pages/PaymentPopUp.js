import React, { useState, useRef, useEffect } from 'react';
import PayPal from "./payPal";
import "./PaymentPopUp.css";

const PaymentPopUp = ({ setPaymentPopUp, payment }) => {
    const menuRef = useRef();

    const [giftCard, setGiftCard] = useState(25);
    const [paypalKey, setPaypalKey] = useState(0); 

    useEffect(() => {
        if (!payment) {
            return;
        }

        let handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setPaymentPopUp(false);
            }
        };

        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
        };
    }, [payment]);

    useEffect(() => {
        setPaypalKey((prevKey) => prevKey + 1);
    }, [giftCard]);

    return (
        <div id='pay-blur'>
            <div id='PaymentContent' ref={menuRef}>
                <div className='cancel' onClick={() => setPaymentPopUp(false)}>
                    <i className='fas fa-times' />
                </div>
                <h2>Select GiftCard Value:</h2>
                    <ul name="cards" id="cards" >
                        <li className={giftCard === 25 ? 'selected' : 'notSelected'} onClick={() => { setGiftCard(25) }} value="25">$25</li>
                        <li className={giftCard === 50 ? 'selected' : 'notSelected'} onClick={() => { setGiftCard(50) }} value="50">$50</li>
                        <li className={giftCard === 100 ? 'selected' : 'notSelected'} onClick={() => { setGiftCard(100) }} value="100">$100</li>
                        <li className={giftCard === 200 ? 'selected' : 'notSelected'} onClick={() => { setGiftCard(200) }} value="200">$200</li>
                    </ul>
                <PayPal
                        key={paypalKey} // Force re-render
                        giftCard={giftCard}
                />
            </div>
        </div>
    )
}

export default PaymentPopUp;
