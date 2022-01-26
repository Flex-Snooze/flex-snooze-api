const mongoose = require('../connection');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	name: String,
    exercises: [String],
	log: { type: [String], required: false },
	stats: { type: String, required: false },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
