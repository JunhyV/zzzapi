const Disk = require("../models/Disk");

// Create register
exports.newDisk = async (req, res) => {
  const disk = new Disk(req.body);

  try {
    // Save register
    await disk.save();
    res.json({ mensaje: "New disk registered", datos: req.body });
  } catch (error) {
    console.log(error);
    next();
  }
};

// Read registers
exports.showDisks = async (req, res, next) => {
  try {
    const disks = await Disk.find({});
    res.json(disks);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.showDisk = async (req, res, next) => {
  try {
    const disk = await Disk.findById(req.params.idDisk);

    if (!disk) {
      res.json({ message: "File not found" });
      next();
    }

    //Show Disk
    res.json(disk);
  } catch (error) {
    console.log(error);
    next();
  }
};

// Update register
exports.updateDisk = async (req, res, next) => {
  try {
    const disk = await Disk.findOneAndUpdate(
      { _id: req.params.idDisk },
      req.body,
      { new: true }
    );
    res.json(disk);
  } catch (error) {
    console.log(error);
    next();
  }
};

// Delete register
exports.deleteDisk = async (req, res, next) => {
  try {
    await Disk.findOneAndDelete({_id: req.params.idDisk});
    res.json({mensaje: `Register id ${req.params.idDisk} deleted`});
  } catch (error) {
    console.log();
    next();
  }
};
