const express = require('express');
const router = express.Router();
const disksRoutes = require('./disksRoutes');

router.use('/', disksRoutes);

router.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>NodeJs y Express en Vercel</title>
      </head>
      <body>
        <h1>List of API's:</h1>
        <ul>
        <li><a href="/disks">Drive Disk Set API</a></li>
        </ul>
      </body>
    </html>
  `);
});

module.exports = router