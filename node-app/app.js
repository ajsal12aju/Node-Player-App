

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const dotenv = require('dotenv');
const routes = require('./routes');

// Load environment variables from .env file
dotenv.config();
app.use(express.json());

app.set('view engine', 'ejs');

// Routes
app.use('/', routes);

console.log(process.env.MONGODB_URI);
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
