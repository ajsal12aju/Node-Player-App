const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const app = express();
const port = 3000;

// Load environment variables from .env file
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({extended: true}));



app.set('view engine', 'ejs');


// Routes
const routes = require('./routes');
app.use('/', routes);

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("Connected to MongoDB");
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
})
.catch(error => {
  console.error("Error connecting to MongoDB:", error);
});
