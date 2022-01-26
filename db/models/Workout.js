const mongoose = require('../connection');
const Schema = mongoose.Schema;

const WorkoutSchema = new mongoose.Schema({
	name: String,
	exercises: [String],
});

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;
