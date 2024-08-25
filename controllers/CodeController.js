const Code = require("../models/Code");

// Create register
exports.newCode = async (req, res) => {
  const code = new Code(req.body);

  try {
    // Save register
    await code.save();
    res.json({ mensaje: "New code registered", datos: req.body });
  } catch (error) {
    console.log(error);
    next();
  }
};

// Read registers
exports.showCodes = async (req, res, next) => {
  try {
    const codes = await Code.find({});
    res.json(codes);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.showCode = async (req, res, next) => {
  try {
    const code = await Code.findById(req.params.idCode);

    if (!code) {
      res.json({ message: "File not found" });
      next();
    }

    //Show register
    res.json(code);
  } catch (error) {
    console.log(error);
    next();
  }
};

// Update register
exports.updateCode = async (req, res, next) => {
  try {
    const code = await Code.findOneAndUpdate(
      { _id: req.params.idCode },
      req.body,
      { new: true }
    );
    res.json(code);
  } catch (error) {
    console.log(error);
    next();
  }
};

// Delete register
exports.deleteCode = async (req, res, next) => {
  try {
    await Code.findOneAndDelete({_id: req.params.idCode});
    res.json({mensaje: `Register id ${req.params.idCode} deleted`});
  } catch (error) {
    console.log();
    next();
  }
};
