const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Model design
const EventSchema = new Schema({
  name: String,
  link: String,
  img: String,
  description: String,
  start: String,
  end: String,
  active: Boolean,
});

module.exports = mongoose.model("Event", EventSchema);
