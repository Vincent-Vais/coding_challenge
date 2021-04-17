const fs = require("fs");
const path = require("path");

module.exports.accessLogs = fs.createWriteStream(
  path.join(__dirname, "access.log"),
  {
    flags: "a",
  }
);
module.exports.errorLogs = fs.createWriteStream(
  path.join(__dirname, "errors.log"),
  {
    flags: "a",
  }
);
