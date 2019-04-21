// Load the Mongoose module and Schema object
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define a new 'UserSchema'
const VitalSignsSchema = new Schema({
	bodyTemperature: {
		type: String,
		default: '',
		trim: true,
		required: 'Body Temperature cannot be blank'
	},
	heartRate: {
		type: String,
		default: '',
		trim: true,
		required: 'Heart Rate cannot be blank'
	},
	bloodPressure: {
		type: String,
		default: '',
		trim: true,
		required: 'Blood Pressure cannot be blank'
	},
	respiratoryRate: {
		type: String,
		default: '',
		trim: true,
		required: 'Respiratory Rate cannot be blank'
	},
	patient: {
		type: Schema.ObjectId,
		ref: 'User'
	},
	nurse: {
		type: Schema.ObjectId,
		ref: 'User'
	},
	created: {
		type: Date,
		default: Date.now
	}
});

mongoose.model('VitalSigns', VitalSignsSchema);
