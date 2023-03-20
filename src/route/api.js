import express from "express";
import APIcontroller from "../controller/APIcontroller";

let router = express.Router();

const initAPIRoute = (app) => {
  router.get("/users", APIcontroller.getAllUser);
  router.post("/create-user", APIcontroller.createNewUSer);
  router.put("/update-user", APIcontroller.updateUser);
  router.delete("/delete-user/:id", APIcontroller.deleteUser);

  return app.use("/api/v1/", router);
};

export default initAPIRoute;
