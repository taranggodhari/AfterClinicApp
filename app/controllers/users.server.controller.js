﻿// Load the module dependencies
const User = require('mongoose').model('User');
const passport = require('passport');

// Create a new error handling controller method
const getErrorMessage = function (err) {
    // Define the error message variable
    let message = '';

    // If an internal MongoDB error occurs get the error message
    if (err.code) {
        switch (err.code) {
            // If a unique index error occurs set the message error
            case 11000:
            case 11001:
                message = 'Username already exists';
                break;
            // If a general error occurs set the message error
            default:
                message = 'Something went wrong';
        }
    } else {
        // Grab the first error message from a list of possible errors
        for (const errName in err.errors) {
            if (err.errors[errName].message) message = err.errors[errName].message;
        }
    }

    // Return the message error
    return message;
};

// Create a new controller method that signin users
exports.signin = function (req, res, next) {
    passport.authenticate('local', (err, user, info) => {
        if (err || !user) {
            res.status(400).send(info);
        } else {
            // Remove sensitive data before login
            user.password = undefined;
            user.salt = undefined;

            // Use the Passport 'login' method to login
            req.login(user, (err) => {
                if (err) {
                    res.status(400).send(err);
				} else {
					req.user = user;
                    res.json(user);
                }
            });
        }
    })(req, res, next);
};

// Create a new controller method that creates new 'regular' users
exports.signup = function (req, res) {
	const user = new User(req.body);
	user.provider = 'local';

	// Try saving the User
	user.save((err) => {
		if (err) {
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		} else {
			// Remove sensitive data before login
			user.password = undefined;
			user.salt = undefined;

			// Login the user
			req.login(user, function (err) {
				if (err) {
					res.status(400).send(err);
				} else {
					req.user = user;
					res.json(user);
				}
			});
		}
	});
};

// Create a new controller method that creates new 'OAuth' users
exports.saveOAuthUserProfile = function (req, profile, done) {
    // Try finding a user document that was registered using the current OAuth provider
    User.findOne({
        provider: profile.provider,
        providerId: profile.providerId
    }, (err, user) => {
        // If an error occurs continue to the next middleware
        if (err) {
            return done(err);
        } else {
            // If a user could not be found, create a new user, otherwise, continue to the next middleware
            if (!user) {
                // Set a possible base username
                const possibleUsername = profile.username || (profile.email ? profile.email.split('@')[0] : '');

                // Find a unique available username
                User.findUniqueUsername(possibleUsername, null, (availableUsername) => {
                    // Set the available user name 
                    profile.username = availableUsername;

                    // Create the user
                    user = new User(profile);

                    // Try saving the new user document
                    user.save(function (err) {
                        // Continue to the next middleware
                        return done(err, user);
                    });
                });
            } else {
                // Continue to the next middleware
                return done(err, user);
            }
        }
    });
};

// Create a new controller method for signing out
exports.signout = function (req, res) {
    // Use the Passport 'logout' method to logout
    req.logout();
	res.status(200);
    // Redirect the user back to the main application page
    //res.redirect('/');
};
//uses the Passport-initiated req.
//isAuthenticated() method to check whether a user is currently authenticated
exports.requiresLogin = function (req, res, next) {
    if (!req.isAuthenticated()) {
        return res.status(401).send({
            message: 'User is not logged in'
        });
    }
    next();
};

//GET
//api/patinets
exports.getPatients = function (req, res, next) {
	User.find({ "role": "PATIENT" }, { "password": 0, "local": 0, "salt": 0 }).sort('-fullName').exec((err, patients) => {
		if (err) {
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		} else {
			console.log(patients);
			res.status(200).json(patients);
		}
	});
};

//GET
//api/nurses
exports.getNurses = function (req, res, next) {
	User.find({ "role": "NURSE" }, { "password": 0 }).sort('-created').exec((err, nurses) => {
		if (err) {
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		} else {
			res.status(200).json(nurses);
		}
	});
};
