const express = require('express');
const router = express.Router();
const playerController = require('../controllers/playerController');

// Player page route
// router.get('/details/:id', playerController.getPlayerById);
router.post('/add', playerController.addPlayer);

// Player page route for the first player
router.get('/details/first', playerController.getFirstPlayerDetails);

// Player page route for the next player
router.get('/details/next/:id', playerController.getNextPlayerDetails);

module.exports = router;
