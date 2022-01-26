// const mongoose = require('../db/connection');
// const seedData = require('./seeds.json');
// const IceCream = require('./models/IceCream');

// IceCream.deleteMany({})
// 	.then(() => {
// 		IceCream.insertMany(seedData).then((iceCream) => {
// 			console.log('We have ice creams 😋😋😋');
// 			console.log(iceCream);
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
// 	// .then((gif) => {
// 	// 	console.log('gif created!', gif);
// 	// 	return gifSeeds.map((gif) => {
// 	// 		return { ...gif, owner: gif._id };
// 	// 	});
// 	// })
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
