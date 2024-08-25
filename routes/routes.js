const express = require('express');
const router = express.Router();
const disksRoutes = require('./disksRoutes');
const agentsRoutes = require('./agentsRoutes');
const bangboosRoutes = require('./bangboosRoutes');
const enginesRoutes = require('./enginesRoutes');
const versionRoutes = require('./versionRoutes');
const eventsRoutes = require('./eventsRoutes');
const codesRoutes = require('./codesRoutes');
const tiersRoutes = require('./tiersRoutes');
const incommingRoutes = require('./incommingRoutes');

router.use('/', disksRoutes);
router.use('/', agentsRoutes);
router.use('/', bangboosRoutes);
router.use('/', enginesRoutes);
router.use('/', versionRoutes);
router.use('/', eventsRoutes);
router.use('/', codesRoutes);
router.use('/', tiersRoutes);
router.use('/', incommingRoutes);

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
        <li><a href="/version/66caa72ddceed153a9f0b083">Version API</a></li>
        <li><a href="/codes">Code API</a></li>
        <li><a href="/events">Events API</a></li>
        <li><a href="/incomming">Incomming API</a></li>
        <li><a href="/tiers">Tiers API</a></li>
        </ul>
      </body>
    </html>
  `);
});

module.exports = router