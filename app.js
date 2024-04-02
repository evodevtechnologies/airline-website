var express = require('express');
const path = require('path');
var app = express();
app.use(express.static('public'));
// app.get('/', function (req, res) {
//     // res.send('Hello World');
//     res.sendFile(path.join(__dirname, 'index.html'));
// })

var server = app.listen(5000, function () {
    console.log(path.join(__dirname, 'index.html'));
   console.log("Express App running at http://127.0.0.1:5000/");
})