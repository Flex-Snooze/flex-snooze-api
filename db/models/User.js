const mongoose = require('../connection');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	_id: Number,
	name: String,
	workouts: { type: [{}], required: false },
	log: { type: [{}], required: false },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
