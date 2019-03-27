const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', function(req, res) {
        res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post('/api/form', (req, res) => {
        // instead of dealing with google security, just log info to a mongoDB and then access
        // the database. Comeback later and figure out how to have it email me.
        console.log('DATA: ', req.body);
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
        console.log(`Listening to server on port ${PORT}!`);
});
