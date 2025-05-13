'use strict';

const express = require('express');

// Constants
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello FS2025 DevOps Course! Es ist Montag bei mir. Cloud Deploy auf Render.com. Docker Deeployment with GitHub Action. Another One.');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
