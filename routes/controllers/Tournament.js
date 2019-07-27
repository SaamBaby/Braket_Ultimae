const Tournament = require('../../models/Tournament');

// Projects CRUD
// Creating
// Create a new Project
exports.createNewTournament = async (req, res) => {
  const body = req.body;
  const tournament = await new Tournament (body).save();
  
  //  console.log(res.body)
  res.redirect(`/tournaments`); 
  
  
};

//Find all Projects'tournaments/list', {
exports.findAllTournamets= async (req, res) => {
  const tournaments = await Tournament.find();
  res.json(tournaments);
  // res.render('/tournaments', { tournaments });
  console.log(tournaments);
 
};


 