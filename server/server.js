require('dotenv').config();

const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const morgan = require('morgan');

const connectDB = require('./config/db');
const securityConfig = require('./config/security');

const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/adminRoutes');

const app = express();

connectDB();
securityConfig(app);

app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../client')));

app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`[ULTRON] Server running on port ${PORT}`);
});