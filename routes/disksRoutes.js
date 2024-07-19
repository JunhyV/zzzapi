const express = require("express");
const router = express.Router();
const DiskController = require("../controllers/DiskController");

router.post("/disks", DiskController.newDisk);
router.get('/disks', DiskController.showDisks);
router.get('/disks/:idDisk', DiskController.showDisk);
router.put('/disks/:idDisk', DiskController.updateDisk);
router.delete('/disks/:idDisk', DiskController.deleteDisk);

module.exports = router;