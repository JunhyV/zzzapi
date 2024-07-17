const express = require('express');
const router = express.Router();

const DiskController = require('../controllers/DiskController');

module.exports = function () {
    router.get('/', (req, res) => {
        res.send('inico');
    })

    // Post conection
    router.post('/disks', DiskController.newDisk);

    return router;
}