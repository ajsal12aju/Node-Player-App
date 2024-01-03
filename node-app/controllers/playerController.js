const Player = require('../models/player');

exports.getPlayerById = async (req, res) => {
  try {
    const playerId = req.params.id;
    const player = await Player.findById(playerId);
    res.render('player', { player });
  } catch (error) {
    res.status(500).send('Error retrieving player details');
  }
};
