import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(cors());

dotenv.config();

app.use(express.json());

const PORT = process.env.PORT || 5000;

import noteRoute from "./routes/notes.route.js";
app.use("/api/notes", noteRoute);

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("Mongodb Connected");
  app.listen(PORT, () => {
    console.log(`Server listen at port ${PORT}`);
  });
});
