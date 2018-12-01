const express = require('express')
const AWS = require('aws-sdk');
const config = require('./config/config');
const keys = require('./config/keys');

const app = express();

app.get('/', (req, res) => {
    const myConfig = new AWS.Config({
        endpoint: keys.endpoint, region: keys.region
    });
    
    var dynamodb = new AWS.DynamoDB(myConfig);
    var client = new AWS.DynamoDB.DocumentClient({ service: dynamodb });
    
    const params = {
        TableName: config.aws_table_name
    };
    
    client.scan(params, function(err, data) {
        if (err) {
            console.log(err);
          } else {
            const { Items } = data;
            console.log(Items);
          }
    });

    res.send('Hello world!')
});



module.exports = app