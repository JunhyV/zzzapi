const mongoose = require("mongoose");

// Model design
const AgentSchema = new mongoose.Schema({
  name: String,
  rank: String,
  rol: String,
  element: String,
  faction: String,
  core_skill: String,
  skills: String,
  mindscape: String,
  stats: String,
  img: String,
  icon: String,
});

module.exports = mongoose.model("Agent", AgentSchema);
