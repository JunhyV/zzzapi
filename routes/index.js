const express = require("express");
const router = express.Router();

const DiskController = require("../controllers/DiskController");

module.exports = function () {
  router.get("/", (req, res) => {
    res.send("New on Vercel");
  });

  // Disk connections
  router.post("/disks", DiskController.newDisk);

  router.get('/disks', DiskController.showDisks);
  router.get('/disks/:idDisk', DiskController.showDisk);

  router.put('/disks/:idDisk', DiskController.updateDisk);

  router.delete('/disks/:idDisk', DiskController.deleteDisk);

  return router;
};
