const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect(
  'mongodb://cfascina:n8gw9cKEYyrCxQC@ds121475.mlab.com:21475/simple-twitter',
  {
    useNewUrlParser: true
  }
);

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  req.io = io;

  return next();
});
app.use(require('./routes'));

server.listen(3000, () => {
  console.log('Server running on port 3000.');
});
