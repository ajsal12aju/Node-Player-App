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

exports.addPlayer = async (req, res) => {
    try {
      const { name, place, image } = req.body;
  
      const newPlayer = new Player({
        name,
        place,
        image,
      });
  
      const savedPlayer = await newPlayer.save();
  
      res.status(201).json({
        message: 'Player added successfully',
        player: savedPlayer,
      });
    } catch (error) {
      console.error('Error adding player:', error);
      res.status(500).send('Error adding player');
    }
  };