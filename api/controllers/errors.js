const logFs = require("../logFiles");

module.exports.get404 = (req, res) => {
  res.status(404);
  res.json({ data: null });
};

module.exports.handleError = (err, req, res, next) => {
  logFs.errorLogs.write(err.message + "\n", (err) => {
    if (err) {
      console.log(err);
    }
  });
  res.status(err.status || 500);
  res.json({ data: null, error: err.message });
};
