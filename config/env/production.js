﻿// Set the 'production' environment configuration object
module.exports = {
	db: process.env.MONGODB_URI,
    sessionSecret: 'productionSessionSecret',
    facebook: {
        clientID: 'Facebook Application ID',
        clientSecret: 'Facebook Application Secret',
        callbackURL: 'https://afterclinic.herokuapp.com/oauth/facebook/callback'
    },
    twitter: {
        clientID: 'Twitter Application ID',
        clientSecret: 'Twitter Application Secret',
        callbackURL: 'https://afterclinic.herokuapp.com/oauth/twitter/callback'
    },
    google: {
        clientID: 'Google Application ID',
        clientSecret: 'Google Application Secret',
        callbackURL: 'https://afterclinic.herokuapp.com/oauth/google/callback'
    }
};