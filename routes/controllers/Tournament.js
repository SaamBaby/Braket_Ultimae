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
  // console.log(tournaments);

  //Find all Projects'tournaments/id',
 
 
};
exports.findTournametById = viewPath => async (req, res) => {
  const id = req.params.id;
  const tournament = await  Tournament.findById(id);
  console.log(tournament);
  console.log(id);
  res.json(tournament);
  // res.render(viewPath, {tournament});
};


 