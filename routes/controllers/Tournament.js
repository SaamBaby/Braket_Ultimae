const Tournament = require('../../models/Tournament');

// Projects CRUD
// Creating
// Create a new Project
exports.createNewTournament = async (req, res) => {
  const body = req.body;
  const tournament = await new Tournament (body).save();
  console.log(res); 
   console.log(res.body)
 // res.redirect(`/projects/${tournament._id}`); testing
  // res.redirect(`http://localhost:3000/tournament/`);
  console.log("saved");
};


