const mongoose = require('./connection');
const Workout = require('./models/Workout');
const seedData = require('./seeds.json');
// const User = require('./models/User');
// const userSeedData = require('./userSeeds.json');

Workout.deleteMany({})
	.then(() => {
		Workout.insertMany(seedData).then((Workout) => {
			console.log('We have Workouts 💪💪💪');
			console.log(Workout);
			process.exit();
		});
	})
	.catch((err) => console.error(err));

