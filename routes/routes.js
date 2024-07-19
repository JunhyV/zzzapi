const express = require('express');
const router = express.Router();
const disksRoutes = require('./disksRoutes');

router.use('/', disksRoutes);

router.get('/', (req, res) => {
  res.send('Home route');
});

module.exports = router