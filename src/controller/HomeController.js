import pool from "../config/connectDB";
import multer from "multer";

let getHomepage = async (req, res) => {
  const [rows, fields] = await pool.execute("SELECT * FROM users");
  return res.render("index.ejs", { dataUser: rows });
};

let getDetailPage = async (req, res) => {
  let id = req.params.userId;
  let [user] = await pool.execute("select * from users where id = ?", [id]);

  return res.send(JSON.stringify(user));
};

let createNewUSer = async (req, res) => {
  let { firstName, lastName, email, address } = req.body;
  await pool.execute(
    "insert into users(firstName,lastName,email,address)value(?,?,?,?)",
    [firstName, lastName, email, address]
  );
  return res.redirect("/");
};

let deleteUser = async (req, res) => {
  let delId = req.body.delId;
  await pool.execute("delete from users where id=?", [delId]);
  return res.redirect("/");
};

let editUser = async (req, res) => {
  let id = req.params.id;
  let [user] = await pool.execute("select * from users where id=?", [id]);
  return res.render("update.ejs", { editUser: user[0] });
};

let UpdateUser = async (req, res) => {
  let { firstName, lastName, email, address, id } = req.body;
  await pool.execute(
    "update users set firstName=?, lastName=?, email=?, address=? where id=?",
    [firstName, lastName, email, address, id]
  );
  return res.redirect("/");
};

let getUploadfile = async (req, res) => {
  return res.render("uploadfile.ejs");
};

const upload = multer().single("profile_pic");

let handleUploadfile = async (req, res) => {
  // 'profile_pic' is the name of our file input field in the HTML form
  upload(req, res, function (err) {
    // req.file contains information of uploaded file
    // req.body contains information of text fields, if there were any

    if (req.fileValidationError) {
      return res.send(req.fileValidationError);
    } else if (!req.file) {
      return res.send("Please select an image to upload");
    } else if (err instanceof multer.MulterError) {
      return res.send(err);
    } else if (err) {
      return res.send(err);
    }

    // Display uploaded image for user validation
    res.send(
      `You have uploaded this image: <hr/><img src="/image/${req.file.filename}" width="500"><hr /><a href="/upload">Upload another image</a>`
    );
  });
};

module.exports = {
  getHomepage,
  getDetailPage,
  createNewUSer,
  deleteUser,
  editUser,
  UpdateUser,
  getUploadfile,
  handleUploadfile,
};
