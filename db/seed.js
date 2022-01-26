const mongoose = require('./connection');
const Workout = require('./models/Workout');
const seedData = require('./seeds.json');
// const User = require('./models/User');
// const userSeedData = require('./userSeeds.json');

// Workout.deleteMany({})
// 	.then(() => {
// 		Workout.insertMany(seedData).then((Workout) => {
// 			console.log('We have Workout 💪💪💪');
// 			console.log(Workout);
// 			process.exit();
// 		});
// 	})
// 	.catch((err) => console.error(err));

// User.deleteMany({})
// 	.then(() => {
// 		User.insertMany(seedData).then((User) => {
// 			console.log('We have a User 🧍');
// 			console.log(User);
// 			process.exit();
// 		});
// 	})
// 	.catch((err) => console.error(err));

// Gif.deleteMany({})
// 	.then(() => {
// 		console.log('Deleted all the gifs!');
// 		return Gif.create({
// 			name: 'Seed-test',
// 			url: 'https://media4.giphy.com/media/OH9zWD6tKD9E5QL7Ru/giphy.gif?cid=ecf05e47mrtzzjgh6jt97csqzqqvf5cdhr4i17xertu99foq&rid=giphy.gif&ct=g',
// 		});
// 	})
// 	.then((gif) => {
// 		console.log('gif created!', gif);
// 		return gifSeeds.map((gif) => {
// 			return { ...gif, owner: gif._id };
// 		});
// 	})
// 	.then(() => {
// 		return Gif.insertMany(gifSeeds);
// 	})
// 	.then((newGifs) => {
// 		console.log('Created new Gifs!', newGifs);
// 	})
// 	.catch(console.error)
// 	.finally(() => {
// 		process.exit();
// 	});
