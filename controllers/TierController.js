const Tier = require("../models/Tier");

// Create register
exports.newTier = async (req, res) => {
  const tier = new Tier(req.body);

  try {
    // Save register
    await tier.save();
    res.json({ mensaje: "New tier registered", datos: req.body });
  } catch (error) {
    console.log(error);
    next();
  }
};

// Read registers
exports.showTiers = async (req, res, next) => {
  try {
    const tiers = await Tier.find({});
    res.json(tiers);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.showTier = async (req, res, next) => {
  try {
    const tier = await Tier.findById(req.params.idTier);

    if (!tier) {
      res.json({ message: "File not found" });
      next();
    }

    //Show register
    res.json(tier);
  } catch (error) {
    console.log(error);
    next();
  }
};

// Update register
exports.updateTier = async (req, res, next) => {
  try {
    const tier = await Tier.findOneAndUpdate(
      { _id: req.params.idTier },
      req.body,
      { new: true }
    );
    res.json(tier);
  } catch (error) {
    console.log(error);
    next();
  }
};

// Delete register
exports.deleteTier = async (req, res, next) => {
  try {
    await Tier.findOneAndDelete({_id: req.params.idTier});
    res.json({mensaje: `Register id ${req.params.idTier} deleted`});
  } catch (error) {
    console.log();
    next();
  }
};
