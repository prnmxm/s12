const path = require('path')
const routes = require('express').Router();
const data = require(path.resolve('data', 'card.json'));

routes.get('/cards', (req, res) => {
  res.status(200).json(data);
});
module.exports = routes;
