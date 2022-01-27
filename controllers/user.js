const express = require('express');
const router = express.Router();
const User = require('../db/models/User');

router.get('/', (req, res) => {
	User.find({}).then((user) => {
		res.json(user);
	});
});

router.get('/:id', (req, res) => {
	User.findById({ _id: req.params.id }).then((user) => {
		res.json(user);
	});
});

// router.post('/:id', async (req, res, next) => {
// 	console.log(req.body);
// 	try {
// 		const userToUpdate = await User.findByIdAndUpdate(
// 			req.params.id,
// 			{ log: req.body },
// 			{ new: true }
// 		);
// 		const user = await User.find({});
// 		res.json(user);
// 	} catch (error) {
// 		next(error);
// 	}
// });

// expects an object with fields {"name": String, "exercises":[String], "date": String}

router.post('/:id', async (req, res, next) => {
	console.log(req.body);
	try {
		const userToUpdate = await User.findByIdAndUpdate(
			req.params.id,

			{ $push: { log: req.body } },
			{ new: true }
		);
		const user = await User.find({});
		res.json(user);
	} catch (error) {
		next(error);
	}
});

// // Show: Get one ice cream by flavor
// // http://localhost:3111/icecreams/flavors/flavor
// router.get('/flavors/:flavor', (req, res) => {
// 	IceCream.findOne({ flavor: req.params.flavor }).then((cone) => {
// 		res.json(cone);
// 	});
// });

// // Create: Add an ice cream
// // http://localhost:3111/icecreams/
// router.post('/', (req, res) => {
// 	IceCream.create(req.body).then((cone) => {
// 		res.status(201).json(cone);
// 	});
// });

// // Delete: Remove an ice cream by id
// // http://localhost:3111/icecreams/id
// router.delete('/:id', (req, res) => {
// 	IceCream.findByIdAndDelete({ _id: req.params.id }).then((delCone) => {
// 		res.json(delCone);
// 	});
// });

// // Create: Make a new Gif
// // http://localhost:8000/api/Gifs/
// router.post('/', async (req, res, next) => {
// 	try {
// 		const newGif = await Gif.create(req.body);
// 		const gif = await Gif.find({});
// 		res.json(gif);
// 	} catch (error) {
// 		next(error);
// 	}
// });

// router.delete('/:gifId', async (req, res, next) => {
// 	try {
// 		// 1. Find the Bookmark by its id, passing in two additional arguments:
// 		// the request body holds the updated information
// 		// { new: true } returns the updated document instead of the old one
// 		const gifToDelete = await Gif.findByIdAndDelete(req.params.gifId);
// 		console.log(gifToDelete);
// 		// If a gif was found and operation successful
// 		if (gifToDelete) {
// 			// send back 204 No Content
// 			const gif = await Gif.find({});
// 			res.json(gif);
// 		} else {
// 			// else send back 404 Not Found
// 			res.sendStatus(404);
// 		}
// 	} catch (error) {
// 		next(err);
// 	}
// });

// // Export this router object so that it is accessible when we require the file elsewhere (IF YOU DONT DO THIS IT WILL BE HARD TO FIGURE OUT WHY YOU ARE GETTING ERRORS)

module.exports = router;
