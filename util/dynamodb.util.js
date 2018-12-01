const AWS = require('aws-sdk');
const keys = require('../config/keys');

module.exports = {
    dbclient: function() {
        const myConfig = new AWS.Config({
            endpoint: keys.endpoint, region: keys.region
        });
        var dynamodb = new AWS.DynamoDB(myConfig);

        return new AWS.DynamoDB.DocumentClient({ service: dynamodb });
    }
}