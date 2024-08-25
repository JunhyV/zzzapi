const express = require("express");
const router = express.Router();
const TierController = require("../controllers/TierController");

// Show all or find register
router.get('/tiers', TierController.showTiers);
router.get('/tiers/:idTier', TierController.showTier);

// Create, Update & Delete
router.post("/tiers", TierController.newTier);
router.put('/tiers/:idTier', TierController.updateTier);
router.delete('/tiers/:idTier', TierController.deleteTier);

module.exports = router;