const user_service = require('../service/user.service');

module.exports = (app) => {
    app.get('/api/user', (req, res) => {
        user_service.fetch_all_user();
        res.send(process.env.APP_ENV)
    });

}
