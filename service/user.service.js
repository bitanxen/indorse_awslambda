const User = require('../model/user.model');
const uuidv1 = require('uuid/v1');

module.exports = {
    fetch_all_user : async () => {
        const user = await User.scan().exec();
        return user;
    },
    save_user : async (res) => {
        var user_id = null;

        const existing_user = await User.scan({
              EMAIL: {eq: res.EMAIL},
              MOBILE: {eq: res.MOBILE}
            }, 
            {conditionalOperator: 'OR'}
          ).exec();

          existing_user.forEach(user => {
            user_id = user.USER_ID;
          });

          if(user_id){
          } else {
            user_id = uuidv1()
          }
          
          const user = new User({
            USER_ID: user_id, 
            TITLE: res.TITLE,
            NAME: res.NAME,
            EMAIL: res.EMAIL,
            MOBILE: res.MOBILE,
            COMPANY: res.COMPANY,
            ADDRESS: res.ADDRESS,
            SPORTS_INTEREST: res.SPORTS_INTEREST,
            FOOD_INTEREST: res.FOOD_INTEREST
          });

          user.save();

        return user_id;
    }
}