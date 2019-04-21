const users = require('../controllers/users.server.controller');
const dailytips = require('../controllers/dailytips.server.controller');
//
module.exports = function (app) {
	//GET DailyTips
	app.route('/api/dailytips/get').post(dailytips.list);

	//POST DailyTips
	app.route('/api/dailytips').post(users.requiresLogin, dailytips.hasAuthorization, dailytips.create);

	//GET CurrentDailyTip By Id
	app.route('/api/dailytips/:dailytipId').get(dailytips.read);

	//UPDATE DailyTips
	app.route('/api/dailytips/:dailytipId').put(users.requiresLogin, dailytips.hasAuthorization, dailytips.update);

	//DELETE DailyTips
	app.route('/api/dailytips/:dailytipId').delete(users.requiresLogin, dailytips.hasAuthorization, dailytips.delete);

	//Params DailyTipsId
	app.param('dailytipId', dailytips.getDailyTipsById);
};
