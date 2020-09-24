const functions = require('firebase-functions');
const express = require('express');
const cors  = require('cors');
const stripe = require('stripe')('sk_test_51HR0ijItSiuEt9hRzyhR2eFsxKuZiJ63jeHCJaMowo8lp7bH73vR2Rk077kvoEJ9QifFgI6UJlO5aWSJaJVnFpW300PMuTGp6o')

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get('/', (req, res) => res.status(200).send
    ('hello world'))

app.post('/payments/create', async (req, res) => {
    const total = req.query.total;

    console.log('Payment Request Received');

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "usd",
        description: "Amazon Clone Payments with Stripe"
    });

    // OK - Created
    res.status(201).send({
        clientSecret: paymentIntent.client_secret
    });
})

// listen
exports.api = functions.https.onRequest(app);