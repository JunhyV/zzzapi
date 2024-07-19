const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Model design
const AgentSchema = new Schema({
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
});

module.exports = mongoose.model("Agent", AgentSchema);
