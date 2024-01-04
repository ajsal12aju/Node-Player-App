const express = require('express');
const router = express.Router();

// Home page route
router.get('/', (req, res) => {
   res.render('index');
});

// Player routesssss
const playerRoutes = require('./playerRoutes');
router.use('/player', playerRoutes);

module.exports = router
