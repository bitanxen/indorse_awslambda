# Indorse Project 

## Requirements

1. Lambda to create user profile. User profile will include user_id, name, email, mobile number, address, company, title
2. Lambda to update user profile when the email or mobile number matches in the incoming api request
3. Lambda to update user interests  including sports, food, media and more. Come up with relevant fields that can be added to user profile and add the same as parameter for the function
4. All data should go to AWS Dynamo DB
5. Configure AWS API gateway and create relevant APIs for create and update user records. Configure security for the API and configure rate limiting for the APIs
6. Use async/await calls in the Node JS functions
7. Add relevant code comments and modularise the code properly. Create more than one Lambda wherever required and make inter Lambda calls if required
8. Write an automated test for this lambda

## DynamoDB:
DynamoDB is Amazon AWS's NoSQL database. Download a local DynamoDB to Start a local instance
https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.DownloadingAndRunning.html

Start DynamoDB:
> java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -sharedDb

For this project, we need a table TB_USER created in DynamoDB. The table schema is available in config/schemas directory

### Drop Table (if already exists)
aws dynamodb delete-table --table-name TB_USER --endpoint-url http://localhost:8000

### Creating Table
Go to the config/schemas directory and execute the below command:
aws dynamodb create-table --cli-input-json file://indorse_tb_user.json --endpoint-url http://localhost:8000

### List Tables
aws dynamodb list-tables --endpoint-url http://localhost:8000

## Node Application
This is NodeJS REST application which is running under Express Server.

To make a NodeJS Express server, AWS Lambda compatible, we need to make few modification in code base.
[ClaudiaJS](https://claudiajs.com/) is a awesome tool to convert a Node Express application into a AWS Lambda serverless application.

### Install ClaudiaJS using npm:
> npm install claudia -g

### Generate Serverless Express Application using ClaudiaJS
>claudia generate-serverless-express-proxy --express-module index

This will generate a file ```claudia.json``` which will have AWS Role, Lamdba Function Name and Region information.

Here ```index``` is the main script name without the extension (index.js).
But this ```index.js``` will not work in your local development machine. Which is why ```index.local.js``` is created and referred in ```package.json```

### Deploy Application in a specific AWS zone 
>claudia create --handler lambda.handler --deploy-proxy-api --region ap-southeast-1

This will create a AWS Lambda function, provided that you have AWSCLI installed and configured in local system

### Test
This Lambda function require few environment variables to be set:

| Variable Name        | Value                               |
| -------------------- |:-----------------------------------:|
| APP_ENV              | production                          |

### Publish below command to re-deploy:
>claudia update