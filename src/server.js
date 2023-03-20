import express from "express";
import configViewEngine from "./config/ViewEngine";
require("dotenv").config();
import initWebRoute from "./route/web";
import initAPIRoute from "./route/api";

const app = express();
const port = process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

configViewEngine(app);

initWebRoute(app);

initAPIRoute(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
