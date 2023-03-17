import express from "express";
import configViewEngine from "./config/ViewEngine";
require("dotenv").config();
import initWebRoute from "./route/web";
import connection from "./config/connectDB";

const app = express();
const port = process.env.PORT;

configViewEngine(app);

initWebRoute(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
