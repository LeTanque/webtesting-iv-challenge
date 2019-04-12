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


server.post('/users', async (req, res) => {
  if (!req.body.username) { 
    return res.status(400).json({ 
      message:"Please include a username to create a new user" 
    })
  }
  try {
    const user = await users.insert(req.body.username);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message:error });
  }
})


server.delete('/users/:id', async (req, res) => {
  try {
    const deleteUser = await users.remove(req.params.id)
    res.status(204).json({ message:deleteUser });
  } catch (error) {
    res.status(500).json({ message:error });
  }
});



module.exports = server;

