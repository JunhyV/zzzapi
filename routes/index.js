const express = require('express');
const router = express.Router();

const DiskController = require('../controllers/DiskController');

module.exports = function () {
    // Post conection
    router.post('/disks', DiskController.newDisk);

    return router;
}