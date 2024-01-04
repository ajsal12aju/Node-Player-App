const express = require('express');
const router = express.Router();
const playerController = require('../controllers/playerController');

router.get('/details/first', playerController.getFirstPlayerDetails);

router.get('/details/next/:id', playerController.getNextPlayerDetails);

router.post('/add', playerController.addPlayer);

module.exports = router;
