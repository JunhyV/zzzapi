const express = require("express");
const router = express.Router();
const BangbooController = require("../controllers/BangbooController");

// Show all or find register
router.get('/bangboos', BangbooController.showBangboos);
router.get('/bangboos/:idBangboo', BangbooController.showBangboo);

// Create, Update & Delete
router.post("/bangboos", BangbooController.newBangboo);
router.put('/bangboos/:idBangboo', BangbooController.updateBangboo);
router.delete('/bangboos/:idBangboo', BangbooController.deleteBangboo);

module.exports = router;