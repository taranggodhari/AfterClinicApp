const mongoose = require('mongoose');
const DailyInformation = mongoose.model('DailyInformation');
//
function getErrorMessage(err) {
	if (err.errors) {
		for (let errName in err.errors) {
			if (err.errors[errName].message) return err.errors[errName].
				message;
		}
	} else {
		return 'Unknown server error';
	}
}
//
exports.create = function (req, res) {
	const dailyinformation = new DailyInformation(req.body);
	dailyinformation.patient = req.user;
	dailyinformation.save((err) => {
		if (err) {
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		} else {
			res.status(200).json(dailyinformation);
		}
	});
};
//
exports.list = function (req, res) {
	DailyInformation.find().sort('-created').populate('patient', 'firstName lastName fullName').exec((err, dailyinformations) => {
		if (err) {
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		} else {
			res.status(200).json(dailyinformations);
		}
	});
};
//
exports.getDailyInformationById = function (req, res, next, id) {
	DailyInformation.findById(id).populate('patient', 'firstName lastName fullName').exec((err, dailyinformation) => {
		if (err) return next(err);
		if (!dailyinformation) return next(new Error('Failed to load Daily Information ' + id));
		req.dailyinformation = dailyinformation;
		next();
	});
};
//
exports.read = function (req, res) {
	res.status(200).json(req.dailyinformation);
};
//
exports.update = function (req, res) {
	const dailyinformation = req.dailyinformation;
	dailyinformation.save((err) => {
		if (err) {
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		} else {
			res.status(200).json(dailyinformation);
		}
	});
};
//
exports.delete = function (req, res) {
	const dailyinformation = req.dailyinformation;
	dailyinformation.remove((err) => {
		if (err) {
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		} else {
			res.status(200).json(dailyinformation);
		}
	});
};
//The hasAuthorization() middleware uses the req.dailyinformation and req.user objects
//to verify that the current user is the creator of the current dailyinformation
exports.hasAuthorization = function (req, res, next) {
	if (req.dailyinformation.patient.id !== req.user.id && req.dailyinformation.patient.role !== "PATIENT") {
		return res.status(403).send({
			message: 'User is not authorized'
		});
	}
	next();
};


