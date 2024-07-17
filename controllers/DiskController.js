const Disk = require('../models/Disk');

// Add register
exports.newDisk = async (req, res) => {
    const disk = new Disk(req.body);

    try {
        // Save register
        await disk.save();
        res.json({mensaje: 'New disk registered', datos: req.body});
        
    } catch (error) {
        // Log y Next
        console.log(error);
        next();
    }
}