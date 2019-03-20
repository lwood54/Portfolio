const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const nodemailer = require('nodemailer');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', function(req, res) {
        res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post('/api/form', (req, res) => {
        nodemailer.createTestAccount((err, account) => {
                const htmlEmail = `
                <h3>Contact Details</h3>
                <ul>
                        <li>Name: ${req.body.name}</li>
                        <li>email: ${req.body.email}</li>
                        <li>company: ${req.body.company}</li>
                </ul>
                <h3>Message</h3>
                <p>${req.body.message}</p>
                `;
                let transporter = nodemailer.createTransport({
                        service: 'gmail',
                        auth: {
                                user: 'lwood3499@gmail.com',
                                pass: 'ThexLeat88*'
                        }
                });

                // const transporter = nodeMailer.createTransport({
                //         host: 'smtp.gmail.com',
                //         port: 587,
                //         auth: {
                //                 // user: 'jeffry.pagac@ethereal.email',
                //                 user: 'lwood3499@gmail.com',
                //                 // pass: 'JvVDTRE9dt8X1e1Tn7'
                //                 pass: 'ThexLeat88*'
                //         }
                // });
                let mailOptions = {
                        // from: 'test@testaccount.com',
                        // to: 'jeffry.pagac@ethereal.email',
                        // replyTo: 'test@testaccount.com',
                        from: req.body.email,
                        to: 'lwood3499@gmail.com',
                        replyTo: req.body.email,
                        subject: 'New Message',
                        text: req.body.message,
                        html: htmlEmail
                };
                transporter.sendMail(mailOptions, (err, info) => {
                        if (err) {
                                return console.log(err);
                        }

                        console.log('Message sent: %s', info.message);
                        console.log('Message URL: %s', nodemailer.getTestMessageUrl(info));
                });
        });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
        console.log(`Listening to server on port ${PORT}!`);
});
