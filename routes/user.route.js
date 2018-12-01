const user_service = require('../service/user.service');
const helper_util = require('../util/helper.util');


module.exports = (app) => {
    app.get('/', (req,res) => {
        res.send('Indorse Project')
    });

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

    app.get('/api/user/:user_id', async (req, res) => {
        try{
            const user_id = req.params.user_id
            const user = await user_service.fetch_user(user_id);
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

    app.put('/api/user', async (req, res) => {
        try{
            const user_id = await user_service.update_user(req.body);
            res.statusCode = 200;
            res.send({Status: "Success", Payload: user_id});
        } catch(err) {
            console.log(err);
            res.statusCode = 500;
            res.send(helper_util.buildresponse(false, null));
        }
    });
}
