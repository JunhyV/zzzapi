const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Model design
const DiskSchema = new Schema({
  name: String,
  set2: String,
  set4: String,
  img: String,
});

module.exports = mongoose.model("Disk", DiskSchema);
