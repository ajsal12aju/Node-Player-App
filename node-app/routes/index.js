const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
   res.render('index');
});

const playerRoutes = require('./playerRoutes');
router.use('/player', playerRoutes);

module.exports = router
