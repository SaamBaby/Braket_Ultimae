const Tournament = require('../../models/Tournament');
const Quaterfinal = require('../../models/quaterfinal');
const Semifinal = require('../../models/semifinal');
const  Final = require('../../models/final');
// Tournament CRUD
// Creating
// Create a new Tournament
exports.createNewTournament = async (req, res) => {
  const body = req.body;
  const tournament = await new Tournament (body).save();
  
    
  res.redirect(`/tournaments`); 
  
  
};

exports.findAllTournamets= async (req, res) => {
  const tournaments = await Tournament.find();
  res.json(tournaments);
  // res.render('/tournaments', { tournaments });
 //  console.log(tournaments);



 
 
 
};

exports.findAllquaterfinallWinners= async (req, res) => {
  const tournaments = await Quaterfinal.find();
 // res.json(tournaments);
  // res.render('/tournaments', { tournaments });
 //  console.log(tournaments);

 
 
 
};
exports.findTournametById = async (req, res) => {
  const id = req.params.id;
  const tournament = await  Tournament.findById(id);
  console.log(tournament);
 
 res.json(tournament);
  
};
exports.selectquaterfinal = async (req, res) => {
  const body = req.body;
  const quaterfinal = await new Quaterfinal  (body).save();
  
    console.log(quaterfinal)
   
  
  
};


// find winners by  id

exports.loadsemifinalById = async (req, res) => {
  const id = req.params.id;
  const quaterfinal = await   Quaterfinal.find( {'tournament_id': id });
 console.log(quaterfinal);
 res.json(quaterfinal);
  
};

// select semifinal winner
exports.selectsemifinal = async (req, res) => {
  const body = req.body;
  const semifinal = await new  Semifinal  (body).save();
  
    console.log(semifinal)
    
  
  
};
exports.loadfinalById = async (req, res) => {
  const id = req.params.id;
  const semifinal = await   Semifinal.find( {'tournament_id': id });
 console.log(semifinal);
 res.json(semifinal);
  
};
// selecting the winner

exports.selectfinal = async (req, res) => {
  const body = req.body;
  const final = await new  Final  (body).save();
  
    console.log(final)
    
  
  
};






 