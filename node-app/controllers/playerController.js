const Player = require('../models/player');

exports.getFirstPlayerDetails = async (req, res) => {
    try {
      // Fetch the first player from the database
      const firstPlayer = await Player.findOne().sort({ _id: 1 }).exec();
  
      if (firstPlayer) {
        // Render the correct view file ('playerDetails.ejs') with the first player data
        res.render('player', { player: firstPlayer });
      } else {
        // If there is no first player, redirect to the home page
        res.redirect('/');
      }
    } catch (error) {
      console.error('Error fetching first player details:', error);
      res.status(500).send('Error fetching first player details');
    }
  };
  

exports.getNextPlayerDetails = async (req, res) => {
  try {
    const currentPlayerId = req.params.id;

    // Fetch the next player from the database based on the current player's ID
    const nextPlayer = await Player.findOne({ _id: { $gt: currentPlayerId } }).sort({ _id: 1 }).exec();

    if (nextPlayer) {
      // Render the playerDetails.ejs view with the next player data
      res.render('playerDetails', { player: nextPlayer });
    } else {
      // If there is no next player, redirect to the home page
      res.redirect('/');
    }
  } catch (error) {
    console.error('Error fetching next player details:', error);
    res.status(500).send('Error fetching next player details');
  }
};

exports.addPlayer = async (req, res) => {
  try {
    const { idNo, name, place, image } = req.body;

    const newPlayer = new Player({
      name,
      place,
      image,
      idNo,
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
