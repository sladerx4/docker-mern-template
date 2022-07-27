const mongoose = require('mongoose');

const connectionString = 'mongodb://mongo:27017/foxsystem'

mongoose.connect(connectionString, { useNewUrlParser: true}).catch((e) => {
    console.error('Connection error', e.message);
})

const db = mongoose.connection;

module.exports = db;