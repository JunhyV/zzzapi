const mongoose = require("mongoose");

// Model design
const VersionSchema = new mongoose.Schema({
    version: String,
    nextVersion: String,
    update: String,
    new: String,
    notReleased: String,
    next: String,
    videos: String
});

module.exports = mongoose.model("Version", VersionSchema);
