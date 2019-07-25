const express= require('express')
const router= express.Router(); // creates a router

const tournament= require('../models/Tournament');

router.get('/', (req, res) => {
    tournament.find()
      .sort({ date: -1 })
      .then(items => res.json(items));
   
  });

module.exports= router;
