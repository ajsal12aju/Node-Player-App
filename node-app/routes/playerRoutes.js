const express = require('express');
const router = express.Router();
const playerController = require('../controllers/playerController');

// Player page route
router.get('/:id', playerController.getPlayerById);

module.exports = router;
