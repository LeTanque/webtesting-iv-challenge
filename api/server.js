const express = require('express');

const users = require('../routes/router.js');

const server = express();

server.use(express.json());

server.get('/', async (req, res) => {
  res.status(200).json({ api: 'up' });
  // res.status(200).send('hello');
});

server.get('/users', async (req, res) => {
  const rows = await users.getAll();
  res.status(200).json(rows);
});



module.exports = server;

