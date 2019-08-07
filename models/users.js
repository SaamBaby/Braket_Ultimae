const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

// Create Schema
const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    
   
  },
  email: {
    type: String,
    
    unique: true,
    sparse:true
  },
  password: {
    type: String,
    
    
  },
  // register_date: {
  //   type: Date,
  //   default: Date.now
  // }
});
UserSchema.plugin(passportLocalMongoose);

module.exports = User = mongoose.model('user', UserSchema);

