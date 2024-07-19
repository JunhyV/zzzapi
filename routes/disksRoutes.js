const express = require("express");
const router = express.Router();
const DiskController = require("../controllers/DiskController");

// Show all or find register
router.get('/disks', DiskController.showDisks);
router.get('/disks/:idDisk', DiskController.showDisk);

// Create, Update & Delete
router.post("/disks", DiskController.newDisk);
router.put('/disks/:idDisk', DiskController.updateDisk);
router.delete('/disks/:idDisk', DiskController.deleteDisk);

module.exports = router;