const dbutli = require('../util/dynamodb.util');

const dynamoose = dbutli.get_connection();

var userSchema = new dynamoose.Schema({
    USER_ID:{
      type: String,
      hashKey: true
    },
    TITLE: {
      type: String,
      required:true
    },
    NAME: {
      type: String,
      required:true
    },
    EMAIL: {
      type: String,
      required:true
    },
    MOBILE: {
        type: String,
        required:true
    },
    COMPANY: {
        type: String,
        required:true
      },
    ADDRESS: {
        type: String,
        required:true
    },
    INTEREST: {
        type: 'list',
        list: [
            {
                SPORTS: { type: String },
                FOOD: { type: String },
                MEDIA: { type: String }
            }
        ]
    }
  }, {saveUnknown: true, useDocumentTypes: true});

  const User = dynamoose.model('TB_USER', userSchema);
module.exports = User;