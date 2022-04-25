// Connecting the App to Database 

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/TODO_App',{
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  family: 4,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'error connecting to db'));

db.once('open', function () {
  console.log('Successfully connected to the database');
});

module.exports = db;