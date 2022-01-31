const express = require('express');
const router = express.Router();
const Log = require('../db/models/Log');

router.get('/', (req, res) => {
	Log.find({}).then((log) => {
		res.json(log);
	});
});

router.get('/:id', (req, res) => {
	Log.findById({ _id: req.params.id }).then((log) => {
		res.json(log);
	});
});

router.delete('/:id', (req, res) => {
	Log.findByIdAndDelete({ _id: req.params.id }).then((deleted) => {
		console.log(req.params.id);
		res.json(deleted);
	});
});

module.exports = router;
