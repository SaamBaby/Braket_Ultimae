const express = require('express');
const mongoose = require('mongoose');
 const path = require('path');
const app = express();
var cors = require('cors');

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

// routers 
app.use('/', require('./routes/index'));
// Add router for auth  as '/' as todo

// setting env for ports 
const port = process.env.PORT || 5001;


app.listen(port, () => console.log(`Server started on port ${port}`));
