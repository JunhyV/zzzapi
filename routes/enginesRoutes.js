const express = require("express");
const router = express.Router();
const EngineController = require("../controllers/EngineController");

// Show all or find register
router.get('/engines', EngineController.showEngines);
router.get('/engines/:idEngine', EngineController.showEngine);

// Create, Update & Delete
router.post("/engines", EngineController.newEngine);
router.put('/engines/:idEngine', EngineController.updateEngine);
router.delete('/engines/:idEngine', EngineController.deleteEngine);

module.exports = router;