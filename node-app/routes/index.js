const express = require('express');
const router = express.Router();

// Home page route
router.get('/', (req, res) => {
   res.render('index');
});
router.get('/', (req, res) => {
    res.send('Hello, this is the root route!');
  });
// Player routes
const playerRoutes = require('./playerRoutes');
router.use('/player', playerRoutes);

module.exports = router
