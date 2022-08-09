require('dotenv').config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser")

const inventoryRoutes = require("./routes/Inventory");
const PORT = 5000;
const mongoDB = process.env.mongoDB;

mongoose
.connect(mongoDB)
.then(() => {

  const app = express();
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(cors());
  app.use(inventoryRoutes);
  

  app.listen(PORT, () => {
    console.log(`App running on ${PORT}`);
  });
})
.catch((err) => {
    console.log(err);
});