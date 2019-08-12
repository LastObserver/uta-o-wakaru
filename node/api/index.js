const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var path = require('path');

const router = require('./router');

const app = express();
const port = process.env.PORT || 80;
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  res.sendFile(path.join('/client/build/index.html'));
});
app.use(express.static('/client/build'));
app.use('/api', router);


mongoose.connect(
  'mongodb://mongodb:27017/backend',
  { useNewUrlParser: true }
)
  .then(() => console.log('Connected to DB!'))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Api server started on port: ${port}`);
});
