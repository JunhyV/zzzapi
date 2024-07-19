const express = require('express');
const disksRoutes = require('./disksRoutes');

module.exports = function() {
  const router = express.Router();

  router.use('/', disksRoutes);

  router.get('/', (req, res) => {
    res.send('Home route');
  });

  router.get('/test', (req, res) => {
    res.send('Test page');
  })
  router.get('/api/', (req, res) => {
    res.send('api test');
  })

  return router;
};