const express = require('express');
const app = express();

app.all('/', (req, res) => {
  res.send('Application is running!');
})

function keepAlive() {
  app.listen(process.env.PORT, () => {
    console.log('Application is running!');
  })
}

module.exports = { keepAlive }