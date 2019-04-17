const users = require('../controllers/users.server.controller');
const dailyinformation = require('../controllers/dailyinformation.server.controller');
//
module.exports = function (app) {
	//GET DailyInformation
	app.route('/api/dailyinformation').get(dailyinformation.list);

	//POST DailyInformation
	app.route('/api/dailyinformation').post(users.requiresLogin, dailyinformation.hasAuthorization, dailyinformation.create);

	//GET CurrentDailyInformation By Id
	app.route('/api/dailyinformation/:dailyinformationId').get(dailyinformation.read);

	//UPDATE DailyInformation
	app.route('/api/dailyinformation/:dailyinformationId').put(users.requiresLogin, dailyinformation.hasAuthorization, dailyinformation.update);

	//DELETE DailyInformation
	app.route('/api/dailyinformation/:dailyinformationId').delete(users.requiresLogin, dailyinformation.hasAuthorization, dailyinformation.delete);

	//Params getDailyInformationById
	app.param('dailyinformationId', dailyinformation.getDailyInformationById);
};
