const express = require("express");
const router = express.Router();
const EventController = require("../controllers/EventController");

// Show all or find register
router.get('/events', EventController.showEvents);
router.get('/events/:idEvent', EventController.showEvent);

// Create, Update & Delete
router.post("/events", EventController.newEvent);
router.put('/events/:idEvent', EventController.updateEvent);
router.delete('/events/:idEvent', EventController.deleteEvent);

module.exports = router;