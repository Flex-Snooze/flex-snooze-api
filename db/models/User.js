const mongoose = require('../connection');
const Schema = mongoose.Schema;
const WorkoutSchema = require('./Workout');
const LogSchema = require('./Log');

const UserSchema = new Schema({
	_id: Number,
	name: String,
	workouts: [WorkoutSchema],
	log: [LogSchema],
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
