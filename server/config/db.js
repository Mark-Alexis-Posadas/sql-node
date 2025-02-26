const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin@123",
  database: "users",
});

connection.connect((err) => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// connection.query("SELECT * FROM posts", (err, results) => {
//   if (err) {
//     console.error("Error executing query:", err);
//   } else {
//     console.log("Results:", results);
//   }
// });

module.exports = connection.promise();
