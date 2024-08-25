const express = require("express");
const router = express.Router();
const CodeController = require("../controllers/CodeController");

// Show all or find register
router.get('/codes', CodeController.showCodes);
router.get('/codes/:idCode', CodeController.showCode);

// Create, Update & Delete
router.post("/codes", CodeController.newCode);
router.put('/codes/:idCode', CodeController.updateCode);
router.delete('/codes/:idCode', CodeController.deleteCode);

module.exports = router;