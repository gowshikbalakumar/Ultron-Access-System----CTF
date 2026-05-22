const User = require('../models/User');
const Session = require('../models/Session');
const FailedAttempt = require('../models/FailedAttempt');

exports.getUsers = async (req, res) => {
  const users = await User.find().select('-password');

  res.json({
    success: true,
    users
  });
};

exports.getSessions = async (req, res) => {
  const sessions = await Session.find().populate('userId');

  res.json({
    success: true,
    sessions
  });
};

exports.getFailedAttempts = async (req, res) => {
  const attempts = await FailedAttempt.find();

  res.json({
    success: true,
    attempts
  });
};