require("dotenv").config();

const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use(express.json());

const patientsRouter = require("./routes/patients");
app.use("/patients", patientsRouter);

// if port is not setup, 3001 will run as default (3000 for front-end)
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listenning on port ${port}..`));
