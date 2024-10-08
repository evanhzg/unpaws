const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
	first_name: { type: String, required: true },
	last_name: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	phone: { type: String, required: true },
	country: { type: String, required: true },
	region: { type: String, required: true },
	city: { type: String, required: true },
	school: { type: String, required: true },
	grade: { type: String, required: true },
	available: { type: Boolean, required: true },
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now },
	disabled_at: { type: Date },
	status: { type: Boolean, default: true },
});

module.exports = mongoose.model('Student', studentSchema);
