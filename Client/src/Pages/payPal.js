import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import React, {useState} from 'react';

const SERVER = 'https://server-production-af5b.up.railway.app'

function Message({ content }) {
    return <p>{content}</p>;
}

function PayPal({giftCard}){
    const [message, setMessage] = useState("");

    const initialOptions = {
	    "client-id": "AcyAYnzrPLNOe3uGmuZTIbpf-pEHgpKyCKU4pGYaQALmHGD671Z_FhE-jH3gE3WnidhKVmofYGnCmS9G",
        "enable-funding": "paylater,venmo,card",
	    "disable-funding": "",
	    "data-sdk-integration-source": "integrationbuilder_sc",
    };

    return(
        <div className='payment'>
            <PayPalScriptProvider options={initialOptions}>
            <PayPalButtons
            style={{
                shape: "rect",
                layout: "vertical",
            }}
            createOrder={async () => {
                try {
                    const response = await fetch(`${SERVER}/api/orders/`, {
                    method: "POST",
                    headers: {
                    "Content-Type": "application/json",
                    },
                    // use the "body" param to optionally pass additional order information
                    // like product ids and quantities
                    body: JSON.stringify({
                    cart: {
                        id: "GiftCard",
                        quantity: `${giftCard}`,
                        },
                    }),
                });

                const orderData = await response.json();

                if (orderData.id) {
                    return orderData.id;
                    
                } else {
                    const errorDetail = orderData?.details?.[0];
                    const errorMessage = errorDetail
                    ? `${errorDetail.issue} ${errorDetail.description} (${orderData.debug_id})`
                    : JSON.stringify(orderData);

                    throw new Error(errorMessage);
                }
                } catch (error) {
                console.error(error);
                setMessage(`Could not initiate PayPal Checkout...${error}`);
                }
            }}
            onApprove={async (data, actions) => {
                try {
                const response = await fetch(
                    `${SERVER}/api/orders/${data.orderID}/capture`,
                    {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    },
                );

                const orderData = await response.json();
                // Three cases to handle:
                //   (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
                //   (2) Other non-recoverable errors -> Show a failure message
                //   (3) Successful transaction -> Show confirmation or thank you message

                const errorDetail = orderData?.details?.[0];

                if (errorDetail?.issue === "INSTRUMENT_DECLINED") {
                    // (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
                    // recoverable state, per https://developer.paypal.com/docs/checkout/standard/customize/handle-funding-failures/
                    return actions.restart();
                } else if (errorDetail) {
                    // (2) Other non-recoverable errors -> Show a failure message
                    throw new Error(
                    `${errorDetail.description} (${orderData.debug_id})`,
                    );
                } else {
                    // (3) Successful transaction -> Show confirmation or thank you message
                    // Or go to another URL:  actions.redirect('thank_you.html');
                    const transaction =
                    orderData.purchase_units[0].payments.captures[0];
                    setMessage(
                    `Transaction ${transaction.status}: ${transaction.id}. See console for all available details`,
                    );
                    console.log(
                    "Capture result",
                    orderData,
                    JSON.stringify(orderData, null, 2),
                    );
                }
                } catch (error) {
                console.error(error);
                setMessage(
                    `Sorry, your transaction could not be processed...${error}`,
                );
                }
            }}
            />
            </PayPalScriptProvider>
            <Message content={message} />
        </div>
    );
}

export default PayPal;