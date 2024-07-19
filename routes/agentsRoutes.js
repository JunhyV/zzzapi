const express = require("express");
const router = express.Router();
const AgentController = require("../controllers/AgentController");

// Show all or find register
router.get('/agents', AgentController.showAgents);
router.get('/agents/:idAgent', AgentController.showAgent);

// Create, Update & Delete
router.post("/agents", AgentController.newAgent);
router.put('/agents/:idAgent', AgentController.updateAgent);
router.delete('/agents/:idAgent', AgentController.deleteAgent);

module.exports = router;