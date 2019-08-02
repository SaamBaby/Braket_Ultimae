const express= require('express')
const router= express.Router(); // creates a router
var tournaments = require('./controllers/Tournament');

// const requireAuth = (req, res, next) => {
//   if (req.isAuthenticated()) return next();

//   return res.redirect('/login');
// };
// router.post('*', requireAuth); // Protect ALL POST routes





// Handle create form (POST)
router.post('/tournament/create', tournaments.createNewTournament);

// Handle select form (POST)
router.post('/tournament/quaterfinal', tournaments.selectquaterfinal);

// List all tournaments'(GET)
router.get('/tournaments', tournaments.findAllTournamets);

// // List a specific tournaments' (GET)

router.get('/tournament/:id', tournaments.findTournametById);

// find all quater final winners

// // Require auth on every route below this router
// router.use(requireAuth);


// // Render edit form (GET)
// router.get('/projects/:id/edit', projects.findProjectById('projects/edit'));

// // Handle edit form (POST)
// router.post('/projects/:id/edit', projects.updateProjectById);
// // Delete a Project (GET)
// router.get('/projects/:id/delete', projects.deleteProjectById);

// module.exports = router;


;
  // Render create form (GET)
// Project new project from un authed users


module.exports= router;
