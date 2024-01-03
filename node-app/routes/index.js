// const express = require('express');
// const router = express.Router();

// // Home page route
// // router.get('/', (req, res) => {
// // //   res.render('index');
// // });
// router.get('/', (req, res) => {
//     res.send('Hello, this is the root route!');
//   });
// // Player routes
// const playerRoutes = require('./playerRoutes');
// router.use('/player', playerRoutes);


const express = require('express');
const playerRouter = express.Router();

// Define player routes here
playerRouter.get('/', (req, res) => {
  res.send('Player route: This is the root player route!');
});

// Additional player routes can be added here

module.exports = playerRouter;
