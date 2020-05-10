const routes = require('express').Router();
const data = require('../data/card');

routes.get('/cards', (req, res) => {
  res.status(200).json(data);
});
module.exports = routes;
