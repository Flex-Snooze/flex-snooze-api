const mongoose = require('../connection');
const Schema = mongoose.Schema;

const LogSchema = new Schema({
	name: String,
	exercises: [String],
	date: { type: String, required: false },
	owner: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
	},
});

const Log = mongoose.model('Log', LogSchema);

module.exports = Log;