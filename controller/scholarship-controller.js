const Scholarship = require('../models/scholarship');
exports.AddScholarship = (req, res) => {
	let newScholarship = new Scholarship(req.body);
	newScholarship.save().then((newScholarship) => {
		if (newScholarship) {
			return res.status(200).json({ message: "Scholarship created successfully" });
		}
		else {
			return res.status(500).json({ message: "Internal error" });
		}
	})
}

exports.getScholarship = (req, res) => {
	Scholarship.find().then((scholarship) => {
		if (scholarship) {
			return res.status(200).json({ scholarship });
		}
		else {
			return res.status(500).json({ message: "Internal error" });
		}
	})
}

exports.getScholarshipById = (req, res) => {
	Scholarship.find({user_id:req.body.user_id}).then((scholarship) => {
		if (scholarship) {
			return res.status(200).json({ scholarship });
		}
		else {
			return res.status(500).json({ message: "Internal error" });
		}
	})
}
