const express = require('express');

const app = express();

require('./routes/user.route')(app);

module.exports = app