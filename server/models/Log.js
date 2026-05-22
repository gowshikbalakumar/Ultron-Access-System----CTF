const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({

  event: String,

  ip: String,

  level: String,

  createdAt: {
    type: Date,
    default: Date.now
  }

});

module.exports = mongoose.model(
  'Log',
  logSchema
);