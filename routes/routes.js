const express = require('express');
const disksRoutes = require('./disksRoutes');

module.exports = function() {
  const router = express.Router();

  router.use('/', disksRoutes);

  router.get('/', (req, res) => {
    res.send('Home route');
  });

  return router;
};