// Set up MySQL connection.
const mysql = require("mysql2");


const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "rootpw",
  database: "burgers_db"
});



// Make connection.
connection.connect(function (err, conn) {
  if (err)
    return res.send(400);

  // if you got a connection...
  connection.query('SELECT * FROM burgers', function (err, rows) {
    if (err) {
      conn.release();
      return res.send(400, 'Couldnt get a connection');
    }
  });
});




// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });

// connection.query("select * from burgers", function(err, res){
//   if (err) throw err;
//   else console.log(res)
// });

// // turn on logging
// connection.on('enqueue', function(query) { console.log(query.sql) });




// Export connection for our ORM to use.
module.exports = connection;




// const mysql2 = require("mysql2");

// if (process.env.JAWSDB_URL) {
//  connection = mysql2.createConnection(process.env.JAWSDB_URL);
// } else {
//   global.connection = mysql2.createConnection({
//     host: "localhost",
//     // port: 3306,
//     user: "root",
//     password: "rootpw",
//     database: "burgers_db"
//   });
// };

// pool.connect();
// app.set('port', 8080);
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(bodyparser.urlencoded({ extended: false }));

// app.get('/test', function (req, res) {
//         var sql = mysql.format("SELECT * FROM users");
//         pool.query(sql, function (error, results, fields) {
//             if (error) {
//                 res.send(error);
//             }
//             res.send(results);
//              pool.end();
//         });
// });

// // Make connection.
// connection.connect(function (err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });

// // connection.query("select * from burgers", function(err, res){
// //     if (err) throw err;
// //     else console.log(res)
// // });

// module.export = connection;