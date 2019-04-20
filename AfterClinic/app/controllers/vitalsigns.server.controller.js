const mongoose = require('mongoose');
const VitalSigns = mongoose.model('VitalSigns');
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
	const vitalsign = new VitalSigns(req.body);
	vitalsign.nurse = req.user;
	vitalsign.save((err) => {
		if (err) {
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		} else {
			res.status(200).json(vitalsign);
		}
	});
};
//
exports.list = function (req, res) {
	VitalSigns.find().sort('-created').exec((err, vitalsigns) => {
		if (err) {
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		} else {
			res.status(200).json(vitalsigns);
		}
	});
};
//
exports.getVitalSignsById = function (req, res, next, id) {
	VitalSigns.findById(id).populate('nurse', 'firstName lastName fullName').exec((err, vitalsign) => {
		if (err) return next(err);
		if (!vitalsign) return next(new Error('Failed to load Vital Sign ' + id));
		req.vitalsign = vitalsign;
		next();
	});
};
//
exports.read = function (req, res) {
	res.status(200).json(req.vitalsign);
};
//
exports.update = function (req, res) {
	const vitalsign = req.vitalsign;
	vitalsign.save((err) => {
		if (err) {
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		} else {
			res.status(200).json(vitalsign);
		}
	});
};
//
exports.delete = function (req, res) {
	const vitalsign = req.vitalsign;
	vitalsign.remove((err) => {
		if (err) {
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		} else {
			res.status(200).json(vitalsign);
		}
	});
};
//The hasAuthorization() middleware uses the req.vitalsigns and req.user objects
//to verify that the current user is the nurse of the current vitalsigns
exports.hasAuthorization = function (req, res, next) {
    req.vitalsign = req.body;
	if (req.vitalsign.nurse.id !== req.user.id && req.vitalsign.nurse.role !== "NURSE") {
		return res.status(403).send({
			message: 'User is not authorized'
		});
	}
	next();
};



