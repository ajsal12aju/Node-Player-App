const express = require('express');
const router = express.Router();
const playerController = require('../controllers/playerController');

// Player page route
router.get('/details/:id', playerController.getPlayerById);

module.exports = router;
