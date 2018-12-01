const user_service = require('../service/user.service');
const helper_util = require('../util/helper.util');


module.exports = (app) => {
    app.get('/api/user', async (req, res) => {
        try{
            const user = await user_service.fetch_all_user();
            res.statusCode = 200;
            res.send(helper_util.buildresponse(true, user));
        } catch(err) {
            console.log(err);
            res.statusCode = 500;
            res.send(helper_util.buildresponse(false, null));
        }
    });

    app.post('/api/user', async (req, res) => {
        try{
            const user_id = await user_service.save_user(req.body);
            res.statusCode = 201;
            res.send({Status: "Success", Payload: user_id});
        } catch(err) {
            console.log(err);
            res.statusCode = 500;
            res.send(helper_util.buildresponse(false, null));
        }
    });
}
