const express = require('express');
const router = express.Router();
const disksRoutes = require('./disksRoutes');
const agentsRoutes = require('./agentsRoutes');
const bangboosRoutes = require('./bangboosRoutes');
const enginesRoutes = require('./enginesRoutes');

router.use('/', disksRoutes);
router.use('/', agentsRoutes);
router.use('/', bangboosRoutes);
router.use('/', enginesRoutes);

router.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>NodeJs y Express en Vercel</title>
      </head>
      <body>
        <h1>List of API's:</h1>
        <ul>
        <li><a href="/agents">Agents API</a></li>
        <li><a href="/bangboos">Banboos API</a></li>
        <li><a href="/engines">W-Engine API</a></li>
        <li><a href="/disks">Drive Disk Sets API</a></li>
        </ul>
      </body>
    </html>
  `);
});

module.exports = router