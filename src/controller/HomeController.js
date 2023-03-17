import { json } from "body-parser";
import connection from "../config/connectDB";

let getHomepage = (req, res) => {
  let data = [];
  connection.query("SELECT * FROM `users` ", function (err, results, fields) {
    data = results.map((row) => {
      return row;
    });
    return res.render("index.ejs", { dataUser: data });
  });
};

module.exports = {
  getHomepage,
};
