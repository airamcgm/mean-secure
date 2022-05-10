var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');

var morgan = require('morgan');
var mongoose = require('mongoose');
var passport = require('passport');
var config = require('./config/database');

var api = require('./routes/api');
var app = express();
var belvo = require("belvo").default;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1/mean-secure')
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/', express.static(path.join(__dirname, 'dist/mean-secure')));
app.use('/api', api);
app.use(passport.initialize());
app.get('/api/belvotoken', function(req, res) {
  var token = true;
  if (token) {
    var client = new belvo(
      'a091cfa6-d0f8-45e2-a3ff-ed72443f387c',
      'q0R#fivWnKDwOMSdXJS6Il_A4wxEGrfna*0N-DsA5gEAErD2TW-S8Gm8#JCmTea@',
      'sandbox'
    );
    client.connect()
      .then(function () {
            client.widgetToken.create()
          .then((response) => {
          res.json(response);
            })
          .catch((error) => { console.log(error.message);
          res.status(500).send({
            message: error.message
          });
        });
    });  
  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }
});

app.get('/api/transaction/:linkid', function(req, res) {
  var token = true;
  if (token) {
    var client = new belvo(
      'a091cfa6-d0f8-45e2-a3ff-ed72443f387c',
      'q0R#fivWnKDwOMSdXJS6Il_A4wxEGrfna*0N-DsA5gEAErD2TW-S8Gm8#JCmTea@',
      'sandbox'
    );
    client.connect()
      .then(function () {
        client.transactions.list({
          filters: {
            link: req.params.linkid
          }
        })
          .then(function (res) {
            console.log(res);
          })
          .catch(function (error) {
            console.log(error);
          });
    });
  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


module.exports = app;