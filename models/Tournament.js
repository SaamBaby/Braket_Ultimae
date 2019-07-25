const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const classSchema = new Schema({
  bracket_name: String,
  bracket_date: Date,
 
  bracket_desc:String
});

const TournamentSchema = new Schema({
  bracket_name: {
    type: String,
    required: true
  },
  bracket_desc: {
    type: String,
    required: true
  },

  bracket_date: {
    type: Date,
    required: true
  },
  class: classSchema
});

const Tournament = mongoose.model('Tournament', TournamentSchema);

module.exports = Tournament;
