const users = require('../controllers/users.server.controller');
const vitalsigns = require('../controllers/vitalsigns.server.controller');
//
module.exports = function (app) {
	//GET VitalSigns 
	app.route('/api/vitalsigns/get').post(vitalsigns.list);

	//POST VitalSigns 
	app.route('/api/vitalsigns').post(users.requiresLogin, vitalsigns.hasAuthorization, vitalsigns.create);

	//GET CurrentVitalSign By Id
	app.route('/api/vitalsigns/:vitalsignId').post(vitalsigns.read);

	//UPDATE VitalSigns
	app.route('/api/vitalsigns/:vitalsignId').put(users.requiresLogin, vitalsigns.hasAuthorization, vitalsigns.update);

	//DELETE VitalSigns
	app.route('/api/vitalsigns/:vitalsignId').delete(users.requiresLogin, vitalsigns.hasAuthorization, vitalsigns.delete);

	//Params VitalSignsId
	app.param('vitalsignId', vitalsigns.getVitalSignsById);
};
