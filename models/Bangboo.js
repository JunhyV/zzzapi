const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Model design
const BangbooSchema = new Schema({
  name: String,
  rank: String,
  skill_a: String,
  skill_b: String,
  skill_c: String,
  stats: String,
  img: String,
});

module.exports = mongoose.model("Bangboo", BangbooSchema);
