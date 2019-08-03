const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const classSchema = new Schema({
 
     semifinal_winner1 :String,
     semifinal_winner2 :  String,
    
 
  
 
 
  
  
});

const SemifinalSchema = new Schema({
 
    

    semifinal_winner1: {
    type:String,
    
  },
  
  semifinal_winner2: {
    type:String,
    
  },
  
 
  class: classSchema
});

const   semifinal= mongoose.model('Semifinal', SemifinalSchema);

module.exports =  semifinal;


