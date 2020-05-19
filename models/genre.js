var mongoose = require('mongoose');

//Genre schema

var genreSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	created_date: {
		type: Date,
		default: Date.now
	}
});

//this object can be accessed outside
var Genre = module.exports = mongoose.model('Genre', genreSchema);

//Function to get genreSchema
module.exports.getGenres = function (callback, limit) {
	Genre.find(callback).limit(limit);
}

//Function to get genre by ID
module.exports.getGenreById = function (id, callback) {
	Genre.findById(id, callback);
}

//Function to add Genre
module.exports.addGenre = function (genre, callback) {
	Genre.create(genre, callback);
}

//Function to update a Genre by its id
module.exports.updateGenre = function (id, genre, options, callback) {
	var query = {
		_id: id
	};
	var update = {
		name: genre.name
	}
	Genre.findOneAndUpdate(query, update, options, callback);
}

//Function to delete Genre by its id
module.exports.deleteGenre = function (id, callback) {
	var query = {
		_id: id
	};
	Genre.remove(query, callback);
}