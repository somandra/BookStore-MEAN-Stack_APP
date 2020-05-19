'use strict';
const router = require('express').Router();
const Genre = require('../models/genre');

//////////////////// GENRE API ////////////////////////

//To get all the genres from database
router.get('/', function (req, res) {
	Genre.getGenres(function (err, genres) {
		if (err) {
			throw err;
		}
		res.json(genres);
	});
});

//To get a genre details using it's id
router.get('/:_id', function (req, res) {
	Genre.getGenreById(req.params._id, function (err, genre) {
		if (err) {
			throw err;
		}
		res.json(genre);
	});
});

//To add a new Genre to the database
router.post('/', function (req, res) {
	var genre = req.body;
	Genre.addGenre(genre, function (err, genre) {
		if (err) {
			throw err;
		}
		res.json(genre);
	});
});

//To update a genre details by its id
router.put('/:_id', function (req, res) {
	var id = req.params._id;
	var genre = req.body;
	Genre.updateGenre(id, genre, {}, function (err, genre) {
		if (err) {
			throw err;
		}
		res.json(genre);
	});
});

//To delete a genre using its id
router.delete('/:_id', function (req, res) {
	var id = req.params._id;
	Genre.deleteGenre(id, function (err, genre) {
		if (err) {
			throw err;
		}
		res.json(genre);
	});
});

module.exports = router;