require("dotenv").config();
const morgan = require("morgan");
const mongoose = require("mongoose");
const express = require("express");

const seed = require("./seed");
const logFs = require("./logFiles");

const app = express();

const carsRoutes = require("./routes/cars.js");
const errorsController = require("./controllers/errors");

const PORT = process.env.PORT || 5000;
const DB = process.env.DB;

mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set("debug", function (collectionName, method, query, doc) {
  const dbLog = `MongoDB: ${collectionName} : ${method} : ${JSON.stringify(
    query
  )} : ${JSON.stringify(doc)}\n`;
  logFs.accessLogs.write(dbLog, (err) => {
    if (err) {
      console.log(err);
    }
  });
});

// seed the database if it is empty
seed();

app.use(
  morgan("common", {
    skip: function (req, res) {
      return res.statusCode < 400;
    },
    stream: logFs.errorLogs,
  })
);
app.use(
  morgan("common", {
    stream: logFs.accessLogs,
  })
);
app.use("/cars", carsRoutes);
app.use(errorsController.handleError);
app.use(errorsController.get404);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
