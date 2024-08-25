const Event = require("../models/Event");

// Create register
exports.newEvent = async (req, res) => {
  const event = new Event(req.body);

  try {
    // Save register
    await event.save();
    res.json({ mensaje: "New event registered", datos: req.body });
  } catch (error) {
    console.log(error);
    next();
  }
};

// Read registers
exports.showEvents = async (req, res, next) => {
  try {
    const events = await Event.find({});
    res.json(events);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.showEvent = async (req, res, next) => {
  try {
    const event = await Event.findById(req.params.idEvent);

    if (!event) {
      res.json({ message: "File not found" });
      next();
    }

    //Show register
    res.json(event);
  } catch (error) {
    console.log(error);
    next();
  }
};

// Update register
exports.updateEvent = async (req, res, next) => {
  try {
    const event = await Event.findOneAndUpdate(
      { _id: req.params.idEvent },
      req.body,
      { new: true }
    );
    res.json(event);
  } catch (error) {
    console.log(error);
    next();
  }
};

// Delete register
exports.deleteEvent = async (req, res, next) => {
  try {
    await Event.findOneAndDelete({_id: req.params.idEvent});
    res.json({mensaje: `Register id ${req.params.idEvent} deleted`});
  } catch (error) {
    console.log();
    next();
  }
};
