#Indorse Project 

## Requirements

1. Lambda to create user profile. User profile will include user_id, name, email, mobile number, address, company, title
2. Lambda to update user profile when the email or mobile number matches in the incoming api request
3. Lambda to update user interests  including sports, food, media and more. Come up with relevant fields that can be added to user profile and add the same as parameter for the function
4. All data should go to AWS Dynamo DB
5. Configure AWS API gateway and create relevant APIs for create and update user records. Configure security for the API and configure rate limiting for the APIs
6. Use async/await calls in the Node JS functions
7. Add relevant code comments and modularise the code properly. Create more than one Lambda wherever required and make inter Lambda calls if required
8. Write an automated test for this lambda
