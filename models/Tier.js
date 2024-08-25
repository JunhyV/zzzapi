const mongoose = require("mongoose");

// Model design
const TierListSchema = new mongoose.Schema({
    rank: String,
    dmg_carry: String,
    anomaly_carry: String,
    stun: String,
    support: String,
});

module.exports = mongoose.model("TierList", TierListSchema);
