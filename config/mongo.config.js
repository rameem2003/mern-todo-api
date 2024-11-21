const mongoose = require("mongoose");
require("dotenv").config();

mongourl = process.env.mongo;

mongoose
  .connect(mongourl)
  .then(() => {
    console.log("We are connected to Mongo DB Cloud Successfully ");
  })
  .catch(() => {
    console.log("Mongo DB Connection Failed. Hey Check Your DB String ");
  });
