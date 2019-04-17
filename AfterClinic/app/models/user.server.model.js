// Load the Mongoose module and Schema object
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define a new 'UserSchema'
const UserSchema = new Schema({
	firstName: {
		type: String,
		required: [true, "can't be blank"]
	},
	lastName: {
		type: String,
		required: [true, "can't be blank"]
	},
	email: {
		type: String,
		lowercase: true,
		required: [true, "can't be blank"],
		match: [/\S+@\S+\.\S+/, 'Email is invalid'],
		index: true
	},
	username: {
		type: String,
		lowercase: true,
		unique: true,
		index: true,
		required: [true, "can't be blank"],
		match: [/^[a-zA-Z0-9]+$/, 'Username is invalid'],
		trim: true
	},
	password: {
		type: String,
		required: 'Password is required',
		validate: [
			(password) => password && password.length > 6,
			'Password should be longer'
		]
	},
	role: {
		type: String,
		required: 'Role is required'
	},
	salt: {
		type: String
	},
	provider: {
		type: String,
		required: 'Provider is required'
	},
	providerId: String,
	providerData: {},
	created: {
		type: Date,
		default: Date.now
	}
});

// Set the 'fullname' virtual property
UserSchema.virtual('fullName').get(function () {
	return this.firstName + ' ' + this.lastName;
}).set(function (fullName) {
	const splitName = fullName.split(' ');
	this.firstName = splitName[0] || '';
	this.lastName = splitName[1] || '';
});

// Use a pre-save middleware to hash the password
UserSchema.pre('save', function (next) {
	if (this.password) {
		this.salt = new Buffer(crypto.randomBytes(16).toString('base64'), 'base64');
		this.password = this.hashPassword(this.password);
	}

	next();
});

// Create an instance method for hashing a password
UserSchema.methods.hashPassword = function (password) {
	//digest parameter required in version 9 of Node.js
	return crypto.pbkdf2Sync(password, this.salt, 10000, 64, 'sha512').toString('base64');
};

// Create an instance method for authenticating user
UserSchema.methods.authenticate = function (password) {
	return this.password === this.hashPassword(password);
};

// Find possible not used username
UserSchema.statics.findUniqueUsername = function (username, suffix, callback) {
	// Add a 'username' suffix
	const possibleUsername = username + (suffix || '');

	// Use the 'User' model 'findOne' method to find an available unique username
	this.findOne({
		username: possibleUsername
	}, (err, user) => {
		// If an error occurs call the callback with a null value, otherwise find find an available unique username
		if (!err) {
			// If an available unique username was found call the callback method, otherwise call the 'findUniqueUsername' method again with a new suffix
			if (!user) {
				callback(possibleUsername);
			} else {
				return this.findUniqueUsername(username, (suffix || 0) + 1, callback);
			}
		} else {
			callback(null);
		}
	});
};

// Configure the 'UserSchema' to use getters and virtuals when transforming to JSON
UserSchema.set('toJSON', {
	getters: true,
	virtuals: true
});

// Create the 'User' model out of the 'UserSchema'
mongoose.model('User', UserSchema);