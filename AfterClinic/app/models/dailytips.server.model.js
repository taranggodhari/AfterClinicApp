// Load the Mongoose module and Schema object
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DailyTipsSchema = mongoose.Schema({

	tip:
	{
		type: String,
		required: true
	},
	nurse: {
		type: Schema.ObjectId,
		ref: 'NURSE'
	},
	created: {
		type: Date,
		default: Date.now
	}
});

mongoose.model('DailyTips', DailyTipsSchema);
