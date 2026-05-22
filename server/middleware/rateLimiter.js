const rateLimit =
  require('express-rate-limit');

const loginLimiter = rateLimit({

  windowMs: 60 * 1000,

  max: 10,

  message: {
    message:
      'Too many requests. ACCESS BLOCKED.'
  }

});

module.exports = loginLimiter;