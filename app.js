const path = require('path');
const express = require('express');
const userRouters = require('./routes/users.js');
const cardsRouters = require('./routes/cards.js');

const { PORT = 3000 } = process.env;
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', userRouters);
app.use('/', cardsRouters);
app.get('*', (req, res) => {
  res.status(404).json({ message: 'Запрашиваемый ресурс не найден' });
});
app.listen(PORT, () => {
  console.log(`Server port ${PORT}`);
});
