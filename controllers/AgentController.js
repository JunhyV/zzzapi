const Agent = require("../models/Agent");

// Create register
exports.newAgent = async (req, res) => {
  const agent = new Agent(req.body);

  try {
    // Save register
    await agent.save();
    res.json({ mensaje: "New agent registered", datos: req.body });
  } catch (error) {
    console.log(error);
    next();
  }
};

// Read registers
exports.showAgents = async (req, res, next) => {
  try {
    const agents = await Agent.find({});
    res.json(agents);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.showAgent = async (req, res, next) => {
  try {
    const agent = await Agent.findById(req.params.idAgent);

    if (!agent) {
      res.json({ message: "File not found" });
      next();
    }

    //Show Agent
    res.json(agent);
  } catch (error) {
    console.log(error);
    next();
  }
};

// Update register
exports.updateAgent = async (req, res, next) => {
  try {
    const agent = await Agent.findOneAndUpdate(
      { _id: req.params.idAgent },
      req.body,
      { new: true }
    );
    res.json(agent);
  } catch (error) {
    console.log(error);
    next();
  }
};

// Delete register
exports.deleteAgent = async (req, res, next) => {
  try {
    await Agent.findOneAndDelete({_id: req.params.idAgent});
    res.json({mensaje: `Register id ${req.params.idAgent} deleted`});
  } catch (error) {
    console.log();
    next();
  }
};
