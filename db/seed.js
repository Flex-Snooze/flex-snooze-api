const User = require('./models/User');
const userSeedData = require('./userSeeds.json');
const Log = require('./models/Log');
const logSeedData = require('./logSeeds.json');

User.deleteMany({})
	.then(() => {
		User.insertMany(userSeedData).then((User) => {
			console.log('We have a user 🧍');
			console.log(User);
			process.exit();
		});
	})
	.catch((err) => console.error(err));

Log.deleteMany({})
	.then(() => {
		Log.insertMany(logSeedData).then((Log) => {
			console.log('We have a log 🪵');
			console.log(Log);
			process.exit();
		});
	})
	.catch((err) => console.error(err));
