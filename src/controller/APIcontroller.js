import pool from "../config/connectDB";

let getAllUser = async (req, res) => {
  const [rows, fields] = await pool.execute("SELECT * FROM users");

  return res.status(200).json({
    messeage: "ok",
    data: rows,
  });
};

let createNewUSer = async (req, res) => {
  let { firstName, lastName, email, address } = req.body;
  if (!firstName || !lastName || !email || !address) {
    return res.status(200).json({
      messeage: "missing required params",
    });
  }
  await pool.execute(
    "insert into users(firstName,lastName,email,address)value(?,?,?,?)",
    [firstName, lastName, email, address]
  );
  return res.status(200).json({
    messeage: "ok",
  });
};

let updateUser = async (req, res) => {
  let { firstName, lastName, email, address, id } = req.body;
  if (!firstName || !lastName || !email || !address || !id) {
    return res.status(200).json({
      messeage: "missing required params",
    });
  }
  await pool.execute(
    "update users set firstName=?, lastName=?, email=?, address=? where id=?",
    [firstName, lastName, email, address, id]
  );
  return res.status(200).json({
    messeage: "ok",
  });
};

let deleteUser = async (req, res) => {
  let delId = req.params.id;
  if (!delId) {
    return res.status(200).json({
      messeage: "missing required params",
    });
  }
  await pool.execute("delete from users where id=?", [delId]);
  return res.status(200).json({
    messeage: "ok",
  });
};

module.exports = {
  getAllUser,
  createNewUSer,
  updateUser,
  deleteUser,
};
