const path = require('path');
const routes = require('express').Router();
// eslint-disable-next-line import/no-dynamic-require
const data = require(path.resolve('data', 'card.json'));
routes.get('/cards', (req, res) => {
  res.status(200).json(data);
});
module.exports = routes;
