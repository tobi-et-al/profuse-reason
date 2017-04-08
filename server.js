// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var multer = require('multer')
var upload = multer({ dest: 'uploads/' })

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(request, response) {
    response.sendFile(__dirname + '/views/index.html');
});

app.post('/', multer({ dest: './uploads/' }).single('datafile'), function(request, response) {
    console.log(request.file);
    response.setHeader('Content-Type', 'application/json');
    console.log(request.file.size);
    response.send({ size: request.file.size })
    response.status(204).end();
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
    console.log('Your app is listening on port ' + listener.address().port);
});