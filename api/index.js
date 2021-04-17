require("dotenv").config();
const morgan = require("morgan");
const logFs = require("./logFiles");

const express = require("express");
const app = express();

const carsRoutes = require("./routes/cars.js");
const errorsController = require("./controllers/errors");

const PORT = process.env.PORT || 3000;

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
