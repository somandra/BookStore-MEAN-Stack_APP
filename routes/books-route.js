'use strict';
const router = require('express').Router();
const Book = require('../models/book');

//////////////////// BOOK API ////////////////////////

// To get all the books from the database
router.get('/', function (req, res) {
	Book.getBooks(function (err, books) {
		if (err) {
			throw err;
		}
		res.json(books);
	});
});

//To get a book details using it's id
router.get('/:_id', function (req, res) {
	Book.getBookById(req.params._id, function (err, book) {
		if (err) {
			throw err;
		}
		res.json(book);
	});
});

//To add a new book to the database
router.post('/', function (req, res) {
	var book = req.body;
	Book.addBook(book, function (err, book) {
		if (err) {
			throw err;
		}
		res.json(book);
	});
});

//To update a book details by its id
router.put('/:_id', function (req, res) {
	var id = req.params._id;
	var book = req.body;
	Book.updateBook(id, book, {}, function (err, book) {
		if (err) {
			throw err;
		}
		res.json(book);
	});
});

//To delete a book using its id
router.delete('/:_id', function (req, res) {
	var id = req.params._id;
	Book.deleteBook(id, function (err, book) {
		if (err) {
			throw err;
		}
		res.json(book);
	});
});

function isLoggedIn(req, res, next) {
	if(req.isAuthenticated()){
		return next();
	}
	res.redirect("/login")
}

module.exports = router;