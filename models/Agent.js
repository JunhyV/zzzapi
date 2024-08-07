const mongoose = require("mongoose");

// Model design
const AgentSchema = new mongoose.Schema({
  full_name: String,
  nickname: String,
  rank: String,
  rol: String,
  element: String,
  faction: String,
  core_skill: String,
  skills: String,
  mindscape: String,
  stats: String,
  full_img: String,
  short_img: String,
  build: String,
});

module.exports = mongoose.model("Agent", AgentSchema);
