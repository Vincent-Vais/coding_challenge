const models = require("../models");

module.exports.getCars = async (req, res, next) => {
  try {
    const cars = await models.Car.find({});
    res.json({ responseData: cars });
  } catch (err) {
    res.status(500);
    err.message = "Unable to find cars";
    next(err);
  }
};

module.exports.getCarById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const car = await models.Car.findOne({ id });
    if (!car) {
      const error = new Error(`Unable to find a car with id ${id}`);
      error.status = 404;
      throw error;
    }
    res.json({ responseData: car });
  } catch (err) {
    res.status(err.status || 500);
    err.message = err.message || `Unable to find a car with id ${id}`;
    next(err);
  }
};
