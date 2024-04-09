const express = require("express");
const mys = require('./demo_db_connection.js');
console.log("hi");

const app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", (req, res) => {

    res.send("Hello World");
})

app.post('/',function(request,response){
    console.log(request.body) //you will get your data in this as object.
 });

 mys.executeQuery(`SHOW TABLES;`);

app.listen(3000);