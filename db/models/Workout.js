const mongoose = require('../connection');
const Schema = mongoose.Schema;

const WorkoutSchema = new mongoose.Schema({
	name: String,
	exercises: [String],
	date: { type: String, required: false },
});

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = WorkoutSchema;
