const express = require('express');
const app = express();
const fs = require('fs');

app.get('/first', (req, res) => {
    fs.readFile( __dirname + '/public/first' + '.json', 'utf8', function (err, data) {
        data ? res.status(200) : res.status(404);
        res.send(data);
    });
});

app.get('/second', (req, res) => {
    fs.readFile( __dirname + '/public/second' + '.json', 'utf8', function (err, data) {
        data ? res.status(200) : res.status(404);
        res.send(data);
    });
});

app.get('/third', (req, res) => {
    fs.readFile( __dirname + '/public/third' + '.json', 'utf8', function (err, data) {
        data ? res.status(200) : res.status(404);
        res.send(data);
    });
});

app.listen(process.env.PORT || 5000, () => console.log('Example app listening on port 5000!'));
