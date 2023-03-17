import express from "express";
import HomeController from "../controller/HomeController";

let router = express.Router();

const initWebRoute = (app) => {
  router.get("/", HomeController.getHomepage);
  router.get("/about", (req, res) => {
    res.send("helo");
  });
  return app.use("/", router);
};

// module.exports = initWebRoute;
export default initWebRoute;
