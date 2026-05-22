const express = require('express');

const router = express.Router();

const authController = require('../controllers/authController');

const loginLimiter = require('../middleware/rateLimiter');

const captchaMiddleware = require('../middleware/captchaMiddleware');

const {
  validateRegister,
  validateLogin,
  handleValidation
} = require('../middleware/validationMiddleware');

router.post(
  '/register',
  validateRegister,
  handleValidation,
  authController.register
);

router.post(
  '/login',
  loginLimiter,
  validateLogin,
  handleValidation,
  captchaMiddleware,
  authController.login
);

router.post('/logout', authController.logout);

module.exports = router;