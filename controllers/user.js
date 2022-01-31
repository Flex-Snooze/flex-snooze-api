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

// router.patch('/:id', async (req, res, next) => {
// 	console.log(req.body, 'test');
// 	try {
// 		const userToUpdate = await User.findByIdAndUpdate(
// 			req.params.id,

// 			{ $pull: log[req.body] },
// 			{ new: true }
// 		);
// 		const user = await User.find({});
// 		res.json(user);
// 	} catch (error) {
// 		next(error);
// 	}
// });

module.exports = router;
