// Load the module dependencies
const config = require('./config');
const mongoose = require('mongoose');


// Define the Mongoose configuration method
module.exports = function () {
    // Use Mongoose to connect to MongoDB
    const db = mongoose.connect(config.db, {
		  useMongoClient: true,
		  socketTimeoutMS: 0,
		  keepAlive: true,
		  reconnectTries: 30
		});

	
    // Load models 
	require('../app/models/user.server.model');
	require('../app/models/vitalSigns.server.model');
	require('../app/models/dailytips.server.model');
	require('../app/models/dailyinformation.server.model');

    // Return the Mongoose connection instance
    return db;
};