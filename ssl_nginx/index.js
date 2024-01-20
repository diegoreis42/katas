const express = require('express');
const app = express();
const port = 3000

const server = app.listen(port, () => {
  console.log('Server started...');
})

app.get('/', (_, res) => {
  res.status(200).send('Deu bom :)');
})

module.exports = { app, server }
