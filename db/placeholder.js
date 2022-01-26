const express = require('express');
const router = express.Router();

const User = require('./models/User');
const Workout = require('./models/Workout');

router.get('/', (req, res) => {
	Workout.find({}).then((workout) => {
		res.json(workout);
	});
});

// router.get('/', (req, res) => {
// 	User.find({}).then((user) => {
// 		res.json(user);
// 	});
// });

// // Show: Get one ice cream by id
// // http://localhost:3111/icecreams/id
// router.get('/:id', (req, res) => {
// 	IceCream.findById({ _id: req.params.id }).then((cone) => {
// 		res.json(cone);
// 	});
// });

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

// // Update: Edit an ice cream by id
// // http://localhost:3111/icecreams/id
// router.put('/:id', (req, res) => {
// 	IceCream.findByIdAndUpdate({ _id: req.params.id }, req.body, {
// 		new: true,
// 	}).then((cone) => {
// 		res.json(cone);
// 	});
// });

// // Delete: Remove an ice cream by id
// // http://localhost:3111/icecreams/id
// router.delete('/:id', (req, res) => {
// 	IceCream.findByIdAndDelete({ _id: req.params.id }).then((delCone) => {
// 		res.json(delCone);
// 	});
// });

// module.exports = router;

/////////////////////////

// const express = require('express');
// const router = express.Router();
// const Gif = require('../models/Gif');

// router.get('/', (req, res, next) => {
// 	// 1. Get all of the bookmarks from the DB
// 	Gif.find({})
// 		.then((gif) => res.json(gif))
// 		// 3. If there's an error pass it on to the error-handling middleware if it exists
// 		.catch(next);
// });

// router.get('/:gifId', async (req, res, next) => {
// 	console.log(req.params.gifId);
// 	try {
// 		// 1. Look up the indivgifIdual bookmark from the DB
// 		console.log(req.params.gifId);
// 		const gif = await Gif.findById(req.params.gifId);
// 		// 2. Send it back to the client as JSON
// 		res.json(gif);
// 	} catch (error) {
// 		// 3. If there's an error, pass it on to the error handling middleware
// 		next(error);
// 	}
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

// router.put('/:gifId', async (req, res, next) => {
// 	try {
// 		const gifToUpdate = await Gif.findByIdAndUpdate(
// 			req.params.gifId,
// 			req.body,
// 			{
// 				new: true,
// 			}
// 		);
// 		// If a bookmark was found and operation successful
// 		if (gifToUpdate) {
// 			// send back updated gif
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

// // Update: Partially edit a gif
// // http://localhost:8000/api/gifs/id
// router.patch('/:gifId', async (req, res, next) => {
// 	console.log(req.body);
// 	try {
// 		const gifToUpdate = await Gif.findByIdAndUpdate(
// 			req.params.gifId,
// 			// partially update the document with the request body's fields,
// 			{ $set: req.body },
// 			{ new: true }
// 		);
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
