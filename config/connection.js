var mysql2 = require("mysql2");

var connection = mysql2.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "rootpw",
  database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// connection.query("select * from burgers", function(err, res){
//     if (err) throw err;
//     else console.log(res)
// });

module.export = connection;