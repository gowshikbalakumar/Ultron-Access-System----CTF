const express = require('express');
const router = express.Router();

const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');
const adminController = require('../controllers/adminController');

router.get(
  '/users',
  authMiddleware,
  adminMiddleware,
  adminController.getUsers
);

router.get(
  '/sessions',
  authMiddleware,
  adminMiddleware,
  adminController.getSessions
);

router.get(
  '/failed-attempts',
  authMiddleware,
  adminMiddleware,
  adminController.getFailedAttempts
);

module.exports = router;