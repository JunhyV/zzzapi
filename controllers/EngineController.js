const Engine = require("../models/Engine");

// Create register
exports.newEngine = async (req, res) => {
  const engine = new Engine(req.body);

  try {
    // Save register
    await engine.save();
    res.json({ mensaje: "New engine registered", datos: req.body });
  } catch (error) {
    console.log(error);
    next();
  }
};

// Read registers
exports.showEngines = async (req, res, next) => {
  try {
    const engines = await Engine.find({});
    res.json(engines);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.showEngine = async (req, res, next) => {
  try {
    const engine = await Engine.findById(req.params.idEngine);

    if (!engine) {
      res.json({ message: "File not found" });
      next();
    }

    //Show engine
    res.json(engine);
  } catch (error) {
    console.log(error);
    next();
  }
};

// Update register
exports.updateEngine = async (req, res, next) => {
  try {
    const engine = await Engine.findOneAndUpdate(
      { _id: req.params.idEngine },
      req.body,
      { new: true }
    );
    res.json(engine);
  } catch (error) {
    console.log(error);
    next();
  }
};

// Delete register
exports.deleteEngine = async (req, res, next) => {
  try {
    await Engine.findOneAndDelete({_id: req.params.idEngine});
    res.json({mensaje: `Register id ${req.params.idEngine} deleted`});
  } catch (error) {
    console.log();
    next();
  }
};
