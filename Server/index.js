
const path = require("path");
const fetch = require("node-fetch");
const {google} = require('googleapis')
const express = require("express");
require('dotenv').config();
const cors = require("cors");
const bodyParser = require("body-parser");
const request = require('request');
var nodemailer = require('nodemailer');
var http = require('http');
var url = require('url');

// nodemon run 'nodemon ./server.js' for auto updates

const PORT = process.env.PORT || 9999;

const app = express();

const oAuth2Client = new google.auth.OAuth2(process.env.GOOGLE_CLIENT_ID, process.env.GOOGLE_CLIENT_SECRET, process.env.GOOGLE_REDIRECT)
oAuth2Client.setCredentials({refresh_token: process.env.GOOGLE_REFRESH_TOKEN})

app.use(express.json());

app.use(cors({
  origin: '*',
}));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  next();
});


app.use(bodyParser.json());

app.post("/api/mail", async (req, res) => {
  const data = req.body.data; // This will contain the JSON data sent in the request

  if(data.captcha === '' || data.captcha === null || data.captcha === undefined){
    return res.json({'success':false})
  }

  const accessToken = await oAuth2Client.getAccessToken()

  var transporter = nodemailer.createTransport({
    service:'gmail',
    auth: { 
        type: 'OAuth2',
        user: 'fanaticaldetails@gmail.com',
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        accessToken: accessToken,
        refreshToken: process.env.GOOGLE_REFRESH_TOKEN
   }
  });

  const siteKey = process.env.SITEKEY;
  const verify = `https://www.google.com/recaptcha/api/siteverify?secret=${siteKey}
  &response=${data.captcha}
  &remoteip=${req.socket.remoteAddress}`

  request(verify, async (err, reponse, body) => {
    body = JSON.parse(body);

    if(body.success  !== undefined && !body.success){
      return res.json({'success':false}) ;
    }

  var receipt = {
    from: process.env.EMAIL,
    to: `${data.email}`,
    subject: 'Fanatical Detailing',
    html:`<p>Hello <strong>${data.firstName} ${data.lastName}</strong>,</p>
    <p>We're happy you trust us with your precious ride and we'll reach out to you to hopefully schedule an appointment soon.</p>
    <p>If you haven't yet, feel free to call or text us at ${process.env.PHONE}.</p>
    <p>We look foward to chatting with you soon.</p>
    <p></br>Sincerely, Fanatical Detailing</p>`
  }

  var loggingData = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: 'Fanatical Detailing (Request)',
    html:`<p>Client Name: <strong>${data.firstName} ${data.lastName}</strong>, </p>
    <p>Email: ${data.email}</p>
    <p>Phone: ${data.phone}</p>
    <p>_________________</p>
    <h3>Interested Services:</h3>
    <p>${data.engine}</p>
    <p>${data.wash}</p>
    <p>${data.vaccum}</p>
    <p>${data.interior}</p>
    <p>${data.ceramic}</p>
    <p>_________________</p>
    <h3> Customer Origin: <p>${data.origin}</p></h3>`
}

  await new Promise((resolve, reject) => {
    transporter.sendMail(loggingData, (err, info) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        resolve(info);
      }
    });
  });

  await new Promise((resolve, reject) => {
    transporter.sendMail(receipt, (err, info) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        resolve(info);
      }
    });
  });
    return res.json({'success':true}) 

})
});

app.post("/api/interest", async (req, res) => {
  const data = req.body.data; // This will contain the JSON data sent in the request

  const accessToken = await oAuth2Client.getAccessToken()

  var transporter = nodemailer.createTransport({
    service:'gmail',
    auth: { 
        type: 'OAuth2',
        user: 'fanaticaldetails@gmail.com',
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        accessToken: accessToken,
        refreshToken: process.env.GOOGLE_REFRESH_TOKEN
   }
  });

  var receipt = {
    from: process.env.EMAIL,
    to: `${data.email}`,
    subject: 'Fanatical Detailing',
    html:`<p>Hey <strong>${data.firstName} ${data.lastName}</strong>,</p>
    <p>We're happy you trust us with your precious ride and we'll reach out to you to hopefully schedule an appointment soon.</p>
    <p>If you haven't yet, feel free to call or text us at ${process.env.PHONE}.</p>
    <p>We look foward to chatting with you soon.</p>
    <p></br>Sincerely, Fanatical Detailing</p>`
  }
  var loggingData = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: 'Fanatical Detailing (Interest Request)',
    html:`<p>Client Name: <strong>${data.firstName} ${data.lastName}</strong> </p>
    <p>Email: ${data.email}</p>
    <p>Phone: ${data.phone}</p>
    <p>_________________</p>
    <h3>Interested Service :</h3>
    <p>${data.service}</p>`
}

await new Promise((resolve, reject) => {
  transporter.sendMail(loggingData, (err, info) => {
    if (err) {
      console.error(err);
      reject(err);
    } else {
      resolve(info);
    }
  });
});

await new Promise((resolve, reject) => {
  transporter.sendMail(receipt, (err, info) => {
    if (err) {
      console.error(err);
      reject(err);
    } else {
      resolve(info);
    }
  });
});

  return res.json({'success':true}) 

});

// ---------------------------------------------------------

const { PAYPAL_CLIENT_ID, PAYPAL_CLIENT_SECRET } = process.env;

const base = "https://api-m.sandbox.paypal.com";


/**
 * Generate an OAuth 2.0 access token for authenticating with PayPal REST APIs.
 * @see https://developer.paypal.com/api/rest/authentication/
 */

const generateAccessToken = async () => {
  try {
    if (!PAYPAL_CLIENT_ID || !PAYPAL_CLIENT_SECRET) {
      throw new Error("MISSING_API_CREDENTIALS");
    }
    const auth = Buffer.from(
      PAYPAL_CLIENT_ID + ":" + PAYPAL_CLIENT_SECRET,
    ).toString("base64");
    const response = await fetch(`${base}/v1/oauth2/token`, {
      method: "POST",
      body: "grant_type=client_credentials",
      headers: {
        Authorization: `Basic ${auth}`,
      },
    });

    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error("Failed to generate Access Token:", error);
  }
};

/**
 * Create an order to start the transaction.
 * @see https://developer.paypal.com/docs/api/orders/v2/#orders_create
 */

const createOrder = async (cart) => {
  console.log(cart)
  const accessToken = await generateAccessToken();
  const url = `${base}/v2/checkout/orders`;
  const payload = {
    intent: "CAPTURE",
    purchase_units: [
      {
        amount: {
          currency_code: "USD",
          value: `${cart.quantity}`,
        },
      },
    ],
  };

  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
      // Uncomment one of these to force an error for negative testing (in sandbox mode only). Documentation:
      // https://developer.paypal.com/tools/sandbox/negative-testing/request-headers/
      // "PayPal-Mock-Response": '{"mock_application_codes": "MISSING_REQUIRED_PARAMETER"}'
      // "PayPal-Mock-Response": '{"mock_application_codes": "PERMISSION_DENIED"}'
      // "PayPal-Mock-Response": '{"mock_application_codes": "INTERNAL_SERVER_ERROR"}'
    },
    method: "POST",
    body: JSON.stringify(payload),
  });

  return handleResponse(response);
};

/**
 * Capture payment for the created order to complete the transaction.
 * @see https://developer.paypal.com/docs/api/orders/v2/#orders_capture
 */
const captureOrder = async (orderID) => {
  const accessToken = await generateAccessToken();
  const url = `${base}/v2/checkout/orders/${orderID}/capture`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
      // Uncomment one of these to force an error for negative testing (in sandbox mode only). Documentation:
      // https://developer.paypal.com/tools/sandbox/negative-testing/request-headers/
      // "PayPal-Mock-Response": '{"mock_application_codes": "INSTRUMENT_DECLINED"}'
      // "PayPal-Mock-Response": '{"mock_application_codes": "TRANSACTION_REFUSED"}'
      // "PayPal-Mock-Response": '{"mock_application_codes": "INTERNAL_SERVER_ERROR"}'
    },
  });

  return handleResponse(response);
};

async function handleResponse(response) {
  try {
    const jsonResponse = await response.json();
    return {
      jsonResponse,
      httpStatusCode: response.status,
    };
  } catch (err) {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }
}

app.post("/api/api/orders", async (req, res) => {
  try {
    // use the cart information passed from the front-end to calculate the order amount detals
    const { cart } = req.body;
    const { jsonResponse, httpStatusCode } = await createOrder(cart);
    res.status(httpStatusCode).json(jsonResponse);
  } catch (error) {
    console.error("Failed to create order:", error);
    res.status(500).json({ error: "Failed to create order." });
  }
});

app.post("/api/api/orders/:orderID/capture", async (req, res) => {
  try {
    const { orderID } = req.params;
    const { jsonResponse, httpStatusCode } = await captureOrder(orderID);
    res.status(httpStatusCode).json(jsonResponse);
  } catch (error) {
    console.error("Failed to create order:", error);
    res.status(500).json({ error: "Failed to capture order." });
  }
});

// ---------------------------------------------------------
app.get('/api/', function (req, res) {
  res.json({ message: "Server Up and Running" })
});
app.get('/api/test/', function (req, res) {
  res.json({ message: "Server Up and Running" })
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
