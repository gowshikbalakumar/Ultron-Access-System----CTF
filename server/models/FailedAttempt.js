const mongoose = require('mongoose');

const failedAttemptSchema = new mongoose.Schema({
  username: String,
  ip: String,
  attempts: {
    type: Number,
    default: 1
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('FailedAttempt', failedAttemptSchema);