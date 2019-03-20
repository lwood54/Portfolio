const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const nodeMailer = require('nodemailer');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use(express.static(__dirname));
// app.use(express.static(path.join(__dirname, 'build')));
// app.get('/*', function(req, res) {
//         res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

app.post('/api/form', (req, res) => {
        console.log(req.body);
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
        console.log(`Listening to server on port ${PORT}!`);
});
