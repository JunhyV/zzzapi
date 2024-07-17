const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DiskSchema = new Schema({
    name: {
        type: String,
        trim: true
    },
    set2: {
        type: String,
        trim: true
    },
    set4: {
        type: String,
        trim: true
    },
    img: {
        type: String,
        trim: true
    }
})

module.exports = mongoose.model('Disk', DiskSchema);