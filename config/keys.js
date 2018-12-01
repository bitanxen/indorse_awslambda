if(process.env.APP_ENV == 'production') {
    // Configure all production set of keys
    module.exports = require('./prod');
} else {
    // Configure all development environment keys from dev.js
    module.exports = require('./dev');
}