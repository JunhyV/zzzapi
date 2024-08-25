const mongoose = require("mongoose");

// Model design
const IncommingSchema = new mongoose.Schema({
    name: String,
    element: String,
    rol: String,
    img: String,
    link: String,
});

module.exports = mongoose.model("Incomming", IncommingSchema);
