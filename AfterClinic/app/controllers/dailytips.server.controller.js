const mongoose = require('mongoose');
const DailyTips = mongoose.model('DailyTips');
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
	const dailytip = new DailyTips(req.body);
	dailytip.nurse = req.user;
	dailytip.save((err) => {
		if (err) {
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		} else {
			res.status(200).json(dailytip);
		}
	});
};
//
exports.list = function (req, res) {
	DailyTips.find().sort('-created').populate('nurse', 'firstName lastName fullName').exec((err, dailytips) => {
		if (err) {
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		} else {
			res.status(200).json(dailytips);
		}
	});
};
//
exports.getDailyTipsById = function (req, res, next, id) {
	DailyTips.findById(id).populate('nurse', 'firstName lastName fullName').exec((err, dailytip) => {
		if (err) return next(err);
		if (!dailytip) return next(new Error('Failed to load Daily Tips ' + id));
		req.dailytip = dailytip;
		next();
	});
};
//
exports.read = function (req, res) {
	res.status(200).json(req.dailytip);
};
//
exports.update = function (req, res) {
	const dailytip = req.dailytip;
	dailytip.save((err) => {
		if (err) {
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		} else {
			res.status(200).json(dailytip);
		}
	});
};
//
exports.delete = function (req, res) {
	const dailytip = req.dailytip;
	dailytip.remove((err) => {
		if (err) {
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		} else {
			res.status(200).json(dailytip);
		}
	});
};
//The hasAuthorization() middleware uses the req.dailytips and req.user objects
//to verify that the current user is the nurse of the current dailytips
exports.hasAuthorization = function (req, res, next) {
	if (req.dailytip.nurse.id !== req.user.id && req.dailytip.nurse.role !== "NURSE") {
		return res.status(403).send({
			message: 'User is not authorized'
		});
	}
	next();
};


