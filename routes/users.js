const routes = require('express').Router();
const data = require('../data/user');

routes.get('/users', (req, res) => {
  res.status(200).json(data);
});
routes.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  const user = data.find((e) => e._id === userId); //eslint-disable-line
  if (user) {
    res.status(200).json(user);
  }
  res.status(404).json({ message: 'Нет пользователя с таким id' });
});
module.exports = routes;
