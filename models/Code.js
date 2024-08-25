const mongoose = require("mongoose");

// Model design
const CodeSchema = new mongoose.Schema({
    code: String,
    content: String,
    release: String,
    new: Boolean,
});

module.exports = mongoose.model("Code", CodeSchema);
