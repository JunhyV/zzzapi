const Bangboo = require("../models/Bangboo");

// Create register
exports.newBangboo = async (req, res) => {
  const bangboo = new Bangboo(req.body);

  try {
    // Save register
    await bangboo.save();
    res.json({ mensaje: "New bangboo registered", datos: req.body });
  } catch (error) {
    console.log(error);
    next();
  }
};

// Read registers
exports.showBangboos = async (req, res, next) => {
  try {
    const bangboos = await Bangboo.find({});
    res.json(bangboos);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.showBangboo = async (req, res, next) => {
  try {
    const bangboo = await Bangboo.findById(req.params.idBangboo);

    if (!bangboo) {
      res.json({ message: "File not found" });
      next();
    }

    //Show bangboo
    res.json(bangboo);
  } catch (error) {
    console.log(error);
    next();
  }
};

// Update register
exports.updateBangboo = async (req, res, next) => {
  try {
    const bangboo = await Bangboo.findOneAndUpdate(
      { _id: req.params.idBangboo },
      req.body,
      { new: true }
    );
    res.json(bangboo);
  } catch (error) {
    console.log(error);
    next();
  }
};

// Delete register
exports.deleteBangboo = async (req, res, next) => {
  try {
    await Bangboo.findOneAndDelete({_id: req.params.idBangboo});
    res.json({mensaje: `Register id ${req.params.idBangboo} deleted`});
  } catch (error) {
    console.log();
    next();
  }
};
