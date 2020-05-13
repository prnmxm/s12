const path = require('path')
const routes = require('express').Router();
const data = require(path.resolve('data', 'user.json'));

routes.get('/users', (req, res) => {
  res.status(200).json(data);
});
routes.all('/users/:id', (req, res) => {
  const userId = req.params.id;
  const user = data.find((e) => e._id === userId); //eslint-disable-line
  if (user) {
    res.status(200).json(user);
  }else {
    res.status(404).json({ message: 'Нет пользователя с таким id' });
  }
});
module.exports = routes;
