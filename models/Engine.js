const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Model design
const EngineSchema = new Schema({
  name: String,
  rank: String,
  rol: String,
  effect: String,
  advanced_stat: String,
  stats: String,
  img: String,
});

module.exports = mongoose.model("Engine", EngineSchema);
