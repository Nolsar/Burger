const mysql2 = require("mysql2");

if (process.env.JAWSDB_URL) {
 connection = mysql2.createConnection(process.env.JAWSDB_URL);
} else {
  global.connection = mysql2.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "rootpw",
    database: "burgers_db"
  });
};


// Make connection.
connection.connect(function (err) {
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