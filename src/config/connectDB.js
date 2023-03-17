import mysql from "mysql2";

// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "notejsbasic",
});

// simple query
// connection.query("SELECT * FROM `users` ", function (err, results, fields) {
//   console.log("check mysql");
//   console.log(results);
//   let rows = results.map((row) => {
//     return row;
//   });
//   console.log(results[0]);
// });

export default connection;
