const Version = require("../models/Version");

// Create register
exports.newVersion = async (req, res, next) => {
  const version = new Version(req.body);

  try {
    // Save register
    await version.save();
    res.json({ mensaje: "New version registered", datos: req.body });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// Read a single register
exports.showVersion = async (req, res, next) => {
  try {
    const version = await Version.findById(req.params.idVersion);

    if (!version) {
      res.status(404).json({ message: "File not found" });
      return next();
    }

    // Show version
    res.json(version);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// Update register
exports.updateVersion = async (req, res, next) => {
  try {
    const version = await Version.findOneAndUpdate(
      { _id: req.params.idVersion },
      req.body,
      { new: true }
    );
    res.json(version);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// Delete register
exports.deleteVersion = async (req, res, next) => {
  try {
    await Version.findOneAndDelete({ _id: req.params.idVersion });
    res.json({ mensaje: `Register id ${req.params.idVersion} deleted` });
  } catch (error) {
    console.log(error);
    next(error);
  }
};