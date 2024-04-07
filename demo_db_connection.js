var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "nishok123",
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});



function executeQuery(sql) {
con.connect(function(err) {
  if (err) throw err;
  con.query(sql, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
}

executeQuery("USE testDB;");
executeQuery("SHOW TABLES;");
// executeQuery("INSERT INTO userdetails (firstname, lastname, email, pass, phonenumber) VALUES ('Nishok', 'Kumar', 'ddk@gmail.com', '1234', '1234567890');");
executeQuery("SELECT * FROM userdetails;");