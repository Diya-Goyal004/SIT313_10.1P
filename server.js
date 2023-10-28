const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = 3001;

const corseOptions = {
    origin: 'http://localhost:3000',
};
app.use(cors(corseOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Created a nodemailer transporter using a free SMTP server (Gmail in this case)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'diyagoyal0104@gmail.com',  
        pass: 'ikil owlm tjiw opve',     
    },
});

app.post('/', async (req, res) => {
    const email = req.body.email;

    const mailOptions = {
        from: 'diyagoyal0104@gmail.com',  // Sender's email address
        to: email,
        subject: 'Welcome to Our Newsletter!',
        text: 'Dear subscriber,\n\nWelcome to our newsletter! You are now part of our Deakin Community:)\n\nBest regards,',
    };

    try {
        // Send mail
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
        res.status(200).send('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Error sending email');
    }
});

app.listen(PORT, () => {
    console.log(`The Server is running at port ${PORT}!`);
});


