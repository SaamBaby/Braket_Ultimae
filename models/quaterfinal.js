const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const classSchema = new Schema({
 
     quaterfinal_winner1 :String,
     quaterfinal_winner2 :  String,
     quaterfinal_winner3 :  String,
     quaterfinal_winner4 :  String,
 
  
 
 
  
  
});

const quaterfinalSchema = new Schema({
 
    

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

const  Quaterfinal= mongoose.model('quaterfinal', quaterfinalSchema);

module.exports = Quaterfinal;


