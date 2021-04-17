const utils = require("../utils/controllers");
const axiosInstace = require("../axios.config");

module.exports.getCars = async (req, res, next) => {
  try {
    const data = await utils.getDataFromService("/cars", axiosInstace);
    res.status(200).json({ data });
  } catch (err) {
    next(err);
  }
};

module.exports.getCarById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await utils.getDataFromService(`/cars/${id}`, axiosInstace);
    res.status(200).json({ data });
  } catch (err) {
    next(err);
  }
};
