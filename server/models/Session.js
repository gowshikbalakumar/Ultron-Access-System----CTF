const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  token: String,
  ipAddress: String,
  userAgent: String,
  expiresAt: Date
}, {
  timestamps: true
});

module.exports = mongoose.model('Session', sessionSchema);