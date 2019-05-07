const mongoose = require('mongoose');
const VitalSigns = mongoose.model('VitalSigns');
const User = require('mongoose').model('User');
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
    VitalSigns.find().sort('-created')
        .populate('nurse')
        .populate('patient')
        .exec((err, vitalsigns) => {
		if (err) {
			return res.status(400).send({
				message: getErrorMessage(err)
			});
        } else {
            //vitalsigns.forEach((vitalsign) => {
            //    User.findById(vitalsign.nurse.id, function (err, nurse) {
            //        if (err) return next(err);
            //        vitalsign.nurse = nurse;
            //    });
                
            //    User.findById(vitalsign.patient.id, function (err, patient) {
            //        if (err) return next(err);
            //        vitalsign.patient = patient;
            //    });
               
            //});
			res.status(200).json(vitalsigns);
		}
	});
};
//
exports.getVitalSignsById = function (req, res, next, id) {
    VitalSigns.findById(id)
        .populate('nurse')
        .populate('patient')
        .exec((err, vitalsign) => {
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
    const vitalsign = req.body;

    const id = vitalsign._id;
    const vitalsigns = { 'bodyTemperature': vitalsign.bodyTemperature, 'heartRate': vitalsign.heartRate, 'bloodPressure': vitalsign.bloodPressure, 'respiratoryRate': vitalsign.respiratoryRate };
    const options = { 'new': true };

    VitalSigns.findByIdAndUpdate(id, vitalsigns, options, (err, updatedVitalSign) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.status(200).json(updatedVitalSign);
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
    if (Object.keys(req.body).length !== 0) {
        req.vitalsign = req.body;
    }
	if (req.vitalsign.nurse.id !== req.user.id && req.vitalsign.nurse.role !== "NURSE") {
		return res.status(403).send({
			message: 'User is not authorized'
		});
	}
	next();
};



