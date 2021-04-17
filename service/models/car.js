const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const carSchema = new Schema({
  id: String,
  make: String,
  model: String,
  package: String,
  color: String,
  year: Number,
  category: String,
  mileage: Number,
  price: Number,
});

module.exports = mongoose.model("Car", carSchema);
