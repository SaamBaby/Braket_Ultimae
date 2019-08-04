const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const classSchema = new Schema({
 
     final_winner1 :String,
    
     tournament_id :  String,
 
  
 
 
  
  
});

const finalSchema = new Schema({
 
    

   final_winner1: {
    type:String,
    
  },
  
 
  tournament_id :   {
    type:String,
},
 
 
class: classSchema
});

const   final= mongoose.model('Final', finalSchema);

module.exports =  final;


