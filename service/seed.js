const models = require("./models");
const logFiles = require("./logFiles");

const DATA = [
  {
    make: "Ford",
    model: "F10",
    package: "Base",
    color: "Silver",
    year: 2010,
    category: "Truck",
    mileage: 120123,
    price: 1999900,
    id: "JHk290Xj",
  },
  {
    make: "Toyota",
    model: "Camry",
    package: "SE",
    color: "White",
    year: 2019,
    category: "Sedan",
    mileage: 3999,
    price: 28999000,
    id: "fWI37Ia",
  },
  {
    make: "Toyota",
    model: "Rav4",
    package: "XSE",
    color: "Red",
    year: 2018,
    category: "SUV",
    mileage: 24001,
    price: 2275000,
    id: "1i3xjRIIc",
  },
  {
    make: "Ford",
    model: "Bronco",
    package: "Badlands",
    color: "Burnt Orange",
    year: 2022,
    category: "SUV",
    mileage: 1,
    price: 4499000,
    id: "dku43920s",
  },
];

module.exports = async () => {
  try {
    const docs = await models.Car.find({});
    if (!docs.length) {
      DATA.forEach(async (item) => {
        await models.Car.create(item);
      });
    }
  } catch (err) {
    logFiles.errorLogs.write("Error " + err, (err) => {
      if (err) {
        console.log(err);
      }
    });
  }
};
