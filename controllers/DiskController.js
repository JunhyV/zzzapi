const Disk = require('../models/Disk');

// Add register
exports.newDisk = async (req, res) => {
    console.log(req.body);
    const disk = new Disk(req.body);

    try {
        // Save register
        await disk.save();
        res.json({mensaje: 'New disk registered'});
        
    } catch (error) {
        // Log y Next
        console.log(error);
        next();
    }
}