import express from "express";
import { dbUri, PORT } from "./config.js";
import mongoose, { mongo } from "mongoose";
import TodoRoutes from "./routes/todoRoutes.js";
import cors from "cors";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Welcome to WaterWise");
});

app.use(cors());

mongoose
  .connect(dbUri)
  .then(() => {
    console.log("Connect to database");
    app.listen(PORT, () => {
      console.log(`Listening to port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
