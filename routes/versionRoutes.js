const express = require("express");
const router = express.Router();
const VersionController = require("../controllers/VersionController");

// Show all or find register
router.get('/version/:idVersion', VersionController.showVersion);

// Create, Update & Delete
router.post("/version", VersionController.newVersion);
router.put('/version', VersionController.updateVersion);
router.delete('/version', VersionController.deleteVersion);

module.exports = router;