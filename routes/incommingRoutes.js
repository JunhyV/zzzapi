const express = require("express");
const router = express.Router();
const IncommingController = require("../controllers/IncommingController");

// Show all or find register
router.get('/incomming', IncommingController.showIncommings);
router.get('/incomming/:idIncomming', IncommingController.showIncomming);

// Create, Update & Delete
router.post("/incomming", IncommingController.newIncomming);
router.put('/incomming/:idIncomming', IncommingController.updateIncomming);
router.delete('/incomming/:idIncomming', IncommingController.deleteIncomming);

module.exports = router;