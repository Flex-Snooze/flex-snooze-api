const mongoose = require('./connection');
const Workout = require('./models/Workout');
const User = require('./models/User');
const Log = require('./models/Log');
const seedData = require('./seeds.json');
const userSeedData = require('./userSeeds.json');
const logSeedData = require('./logSeedData.json');

Workout.deleteMany({})
	.then(() => {
		Workout.insertMany(seedData).then((Workout) => {
			console.log('We have Workouts 💪💪💪');
			console.log(Workout);
			process.exit();
		});
	})
	.catch((err) => console.error(err));

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
			console.log('We have a Log 🪵');
			console.log(Log);
			process.exit();
		});
	})
	.catch((err) => console.error(err));
