// Load the Mongoose module and Schema object
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DailyInformationSchema = mongoose.Schema({

	information:
	{
		type: String,
		required: true
	},
	creator: {
		type: Schema.ObjectId,
		ref: 'User'
	},
	created: {
		type: Date,
		default: Date.now
	}
});

mongoose.model('DailyInformation', DailyInformationSchema);
