const Incomming = require("../models/Incomming");

// Create register
exports.newIncomming = async (req, res) => {
  const incomming = new Incomming(req.body);

  try {
    // Save register
    await incomming.save();
    res.json({ mensaje: "New incomming registered", datos: req.body });
  } catch (error) {
    console.log(error);
    next();
  }
};

// Read registers
exports.showIncommings = async (req, res, next) => {
  try {
    const incomming = await Incomming.find({});
    res.json(incomming);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.showIncomming = async (req, res, next) => {
  try {
    const incomming = await Incomming.findById(req.params.idIncomming);

    if (!incomming) {
      res.json({ message: "File not found" });
      next();
    }

    //Show register
    res.json(incomming);
  } catch (error) {
    console.log(error);
    next();
  }
};

// Update register
exports.updateIncomming = async (req, res, next) => {
  try {
    const incomming = await Incomming.findOneAndUpdate(
      { _id: req.params.idIncomming },
      req.body,
      { new: true }
    );
    res.json(incomming);
  } catch (error) {
    console.log(error);
    next();
  }
};

// Delete register
exports.deleteIncomming = async (req, res, next) => {
  try {
    await Incomming.findOneAndDelete({_id: req.params.idIncomming});
    res.json({mensaje: `Register id ${req.params.idIncomming} deleted`});
  } catch (error) {
    console.log();
    next();
  }
};
