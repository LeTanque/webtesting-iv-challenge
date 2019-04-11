require('dotenv').config();

const server = require('./api/server.js');

const port = process.env.PORT || 3388;
server.listen(port, () => console.log(`\n\n--- Servarrr ${port} ---`));

