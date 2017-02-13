// server/app.js
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
var router = express.Router();
// Moongose
var mongoose = require('mongoose');
var device = require('./device');
var User = require('./user');
// Login and passport
var session = require('express-session');
var bodyParser = require('body-parser');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var MongoDBStore = require('connect-mongodb-session')(session);
mongoose.connect('mongodb://localhost:27017/commerce');
var store = new MongoDBStore(
  {
    uri: 'mongodb://localhost:27017/commerce',
    collection: 'Sessioni'
  });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: 'ok',
  store: store,
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 365 * 24 * 60 * 60 * 1000, httpOnly: false, secure: false }
}));
app.use(passport.initialize());
app.use(passport.session());

// router.use(function (req, res, next) {
//   console.log('lalala', req.method, req.url, req.path);
//   if (req.user === undefined) {
//     res.json({
//     });
//   } else {
//     res.json({
//       username: req.user
//     });
//   }
//   return
//   next()
// });

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

router.route('/shop/:name')
.get(function (req, res) {
  var replaced = req.params.name.split('-').join(' ');
  console.log(replaced);
  device.find({model: replaced}, function (err, device) {
    if (err) {
      console.log(err);
    } else {
      res.json(device);
    }
  });
});

router.route('/registration')
.post(function (req, res) {
  var new_user = new User();
  new_user.name = req.body.name;
  new_user.surname = req.body.surname;
  new_user.email = req.body.email;
  new_user.password = req.body.password;
  new_user.save(function (err) {
    if (err) {
      return res.json({status: 500, error: err});
    }
    res.json({ message: 'Utente creato' });
  });
});

router.route('/addcomment')
.post(function (req, res) {
  device.findOne({model: req.body.model}, function (err, device) {
    if (err) {
      res.send(err);
    } else {
      device.reviews.push({email: req.body.email, review: req.body.review});
      device.save(function (err) {
        if (err) {
          res.send(err);
        } else {
          res.json({ message: 'Commento aggiunto!' });
        }
      });
    }
  }
);
});

router.route('/checkout')
.post(function (req, res) {
  req.body.device.every(function (devices) {
    device.findOne({model: devices.model}, function (err, devices) {
      if (devices == null) {
        res.status(500).json({ error: 'errore!' })
      } else {
        console.log("blabla")
        res.json({ message: 'Acquisto effettuato' });
      }
    });
  });
});

router.route('/sidebar')
.post(function (req, res) {
  device.find({}, function (err, device) {
    if (err) {
      console.log(err);
    } else {
      res.json(device);
    }
  }).limit(3);
});

// Login
passport.use(new LocalStrategy(
  function (username, password, done) {
    User.findOne({ email: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.password === password) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

passport.serializeUser(function (user, done) {
  done(null, user._id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

app.post('/api/login', passport.authenticate('local'), function (req, res) {
  res.json(req.user);
});

// Always return the main index.html, so react-router render the route in the client
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
// });

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));
// Serve static assets
app.use('/api', router);
app.use(express.static(path.resolve(__dirname, '..', 'build')));

module.exports = app;
