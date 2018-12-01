const dbutli = require('../util/dynamodb.util');

const User = dbutli.get_connection().model('TB_USER', { 
    USER_ID: String, 
    TITLE: String,
    NAME: String,
    EMAIL: String,
    MOBILE: String,
    COMPANY: String,
    ADDRESS: String,
    SPORTS_INTEREST: [],
    FOOD_INTEREST: []
});

module.exports = User;