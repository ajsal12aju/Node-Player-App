const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
 
    name:{
      type: String,
      required: true,
    },
    place:{
      type: String,
      required: true,
    },
    image: {
      type: String
    }
  
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;
