const express = require('express');
const router = express.Router();
const Log = require('../db/models/Log');


// Read Entire Log
router.get('/', (req, res) => {
	Log.find({}).then((log) => {
		res.json(log);
	});
});

// Read Log Entry
router.get('/:id', (req, res) => {
	Log.findById({ _id: req.params.id }).then((log) => {
		res.json(log);
	});
});


// Create Log Entry
router.post('/', (req, res) => {
	Log.create(req.body).then((entry) => {
		res.status(201).json(entry);
	});
});


// Destroy Log Entry
router.delete('/:id', (req, res) => {
	Log.findByIdAndDelete({ _id: req.params.id }).then((deleted) => {
		console.log(req.params.id);
		res.json(deleted);
	});
});

module.exports = router;
