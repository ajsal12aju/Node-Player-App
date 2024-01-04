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

    const nextPlayer = await Player.findOne({ _id: { $gt: currentPlayerId } }).sort({ _id: 1 }).exec();

    if (nextPlayer) {
      res.render('player', { player: nextPlayer });
    } else {
      res.redirect('/');
    }
  } catch (error) {
    console.error('Error fetching next player details:', error);
    res.status(500).send('Error fetching next player details');
  }
};

exports.addPlayer = async (req, res) => {
  try {
    const { idNo, name, place, imageUrl  } = req.body;

    const newPlayer = new Player({
      name,
      place,
      image:imageUrl,
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
