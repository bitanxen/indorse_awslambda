const config = require('../config/config');
const dbclient = require('../util/dynamodb.util');

module.exports = {
    fetch_all_user: function(){
        const params = {
            TableName: config.aws_table_name
        };
        
        dbclient.dbclient().scan(params, function(err, data) {
            if (err) {
                console.log(err);
              } else {
                const { Items } = data;
                console.log(Items);
              }
        });
    }
};