const express = require('express');
const mongoose = require('mongoose');
 const path = require('path');
 const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
//var GitHubStrategy = require('passport-github').Strategy;
const app = express();
var cors = require('cors');
var logger = require('morgan');

var usersRouter = require('./routes/users');
var users = require('./models/users');
var authRouter = require('./routes/auth');

const session = require('express-session');

// Connect to Mongo
  mongoose.connect(
    `mongodb+srv://saambaby:Saambaby@brackercluster-lifph.mongodb.net/test?retryWrites=true&w=majority`,
    { useNewUrlParser: true }
  );
var db = mongoose.connection;
db.on('error', err => console.error(err));
db.once('open', () => console.log('Connected to Mongodb'));



// Bodyparser Middleware
app.use(express.json());
app.use(cors());
app.use(logger('dev'));



// Express Session for persistent authentication
app.use(
  session({
    secret: 'kjnhfwkejsdhfjchw3hruy23iyriuwyefkcnskdbchhbf3uhfbubjnjn',
    resave: false,
    saveUninitialized: true
  })
);


app.use(passport.initialize()); // initialise passport 
  app.use(passport.session()); // use passport with session

  passport.serializeUser(User.serializeUser());
  passport.deserializeUser(User.deserializeUser());



  // use static authenticate method of model in LocalStrategy
passport.use(new LocalStrategy(User.authenticate()));

// routers 

app.use('/', authRouter);

app.use('/users', usersRouter);
app.use('/', require('./routes/index'));


// setting env for ports 
const port = process.env.PORT || 5001;
if (process.env.NODE_ENV === 'production') {
  app.use(express.static( 'client/build' ));

  app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'client', 'build', 'index.html')); // relative path
  });
}

app.listen(port, () => console.log(`Server started on port ${port}`));
