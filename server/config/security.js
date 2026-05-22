const helmet = require('helmet');
const cors = require('cors');

const securityConfig = (app) => {

  app.use(helmet());

  app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
  }));

};

module.exports = securityConfig;