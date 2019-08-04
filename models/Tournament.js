const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const classSchema = new Schema({
  bracket_name: String,
  bracket_date: String,
 
  bracket_desc:String,
  bracket_host:String,
  bracket_img:String,
  bracket_player1:String,
  bracket_player2:String,
  bracket_player3:String,
  bracket_player4:String,
  bracket_player5:String,
  bracket_player6:String,
  bracket_player9:String,
  bracket_player8:String,
  quaterfinal_winner1 :String,
     quaterfinal_winner2 :  String,
     quaterfinal_winner3 :  String,
     quaterfinal_winner4 :  String,
 
 


});

const TournamentSchema = new Schema({
  bracket_name: {
    type: String,
   
  },
  bracket_desc: {
    type: String,
    
  },

  bracket_date: {
   
      type: Date,
      default: Date.now
  
    
  },
   bracket_img: {
    type:String,
    
  },
  bracket_host: {
    type:String,
    
  },
  bracket_player1: {
    type:String,
    
  },
  
  bracket_player2: {
    type:String,
    
  },
  bracket_player3: {
    type:String,
    
  },
  bracket_player4: {
    type:String,
    
  },
  bracket_player5: {
    type:String,
    
  },
  bracket_player6: {
    type:String,
    
  },
  bracket_player7: {
    type:String,
    
  },
  bracket_player8: {
    type:String,
    
  },
  quaterfinal_winner1: {
    type:String,
    
  },
  
  quaterfinal_winner2: {
    type:String,
    
  },
  quaterfinal_winner3: {
    type:String,
    
  },
  quaterfinal_winner4: {
    type:String,
    
  },
  
  class: classSchema
});

const Tournament = mongoose.model('Tournament', TournamentSchema);

module.exports = Tournament;


