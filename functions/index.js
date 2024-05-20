const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const nodemailer = require('nodemailer');
const cors = require('cors')({ origin: true }); // Import CORS middleware

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'geogardenweb@gmail.com',
        pass: 'bhnc rzkb rhip qnws'
    }
});

exports.sendEmail = onRequest((req, res) => {
    cors(req, res, () => { // Handle CORS preflight request
        const { to, subject, html } = req.body;

        const mailOptions = {
            from: 'geogardenweb@gmail.com',
            to,
            subject,
            html
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error(error);
                res.status(500).send('Failed to send email');
            } else {
                console.log('Email sent: ' + info.response);
                res.send('Email sent successfully');
            }
        });
    });
});
