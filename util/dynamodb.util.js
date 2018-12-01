const dynamoose = require('dynamoose');
const AWS = require('aws-sdk');
const keys = require('../config/keys');

module.exports = {
    get_connection: function() {
        const myConfig = new AWS.Config(keys);
        var dynamodb = new AWS.DynamoDB(myConfig);

        dynamoose.setDDB(dynamodb);
        return dynamoose;
    }
}