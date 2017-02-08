// server/app.js
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
var router = express.Router();
// Moongose
var mongoose = require('mongoose');
var device = require('./device');
mongoose.connect('mongodb://localhost:27017/commerce');

router.use(function (req, res, next) {
  console.log('lalala', req.method, req.url, req.path);
  next();
});

router.route('/devices')

.post(function (req, res) {
  device.find({}, function (err, device) {
    if (err) {
      console.log(err);
    } else {
      res.json(device);
    }
  });
});

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));
// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));
app.use('/api', router);

module.exports = app;
