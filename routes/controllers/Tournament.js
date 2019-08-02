const Tournament = require('../../models/Tournament');
const Quaterfinal = require('../../models/quaterfinal');

// Projects CRUD
// Creating
// Create a new Project
exports.createNewTournament = async (req, res) => {
  const body = req.body;
  const tournament = await new Tournament (body).save();
  
    
  res.redirect(`/tournaments`); 
  
  
};

exports.selectquaterfinal = async (req, res) => {
  const body = req.body;
  const quaterfinal = await new Quaterfinal  (body).save();
  
    console.log(quaterfinal)
  
  
  
};



//Find all findAllquaterfinals
  exports.findAllquaterfinals= async (req, res) => {
    const quaterfinals = await Quaterfinal.find();
    res.json(quaterfinals);
    
     console.log(quaterfinals);
  
   
   
   
  };


exports.findAllTournamets= async (req, res) => {
  const tournaments = await Tournament.find();
  res.json(tournaments);
  // res.render('/tournaments', { tournaments });
   console.log(tournaments);

 
 
 
};
exports.findTournametById = async (req, res) => {
  const id = req.params.id;
  const tournament = await  Tournament.findById(id);
 // console.log(tournament);
 
 res.json(tournament);
  
};





 