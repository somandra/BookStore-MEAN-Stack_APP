const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bookRoute = require('./routes/books-route');
const genreRoute = require('./routes/genres-route');
const passport = require('passport');
const authRoutes = require('./routes/auth-routes');
const profileRoutes = require('./routes/profile-routes');
const LocalStrategy	= require("passport-local");
const User        = require("./models/user-model");


//Using dot env to laod environment variables
dotenv.load();
const MONGODB_URL = process.env.BOOKSTORE_MLAB_URL || 'mongodb://database/bookstore';
const PORT = 3000;
mongoose.connect(MONGODB_URL,{useNewUrlParser: true,useUnifiedTopology: true});
//always follow the order in which cookie and sessions are intialized
app.use(require("express-session")({
	secret: "I'm Somandra Singh Rathore",
	resave: false,
	saveUninitialized: false
}));
//initialize passport
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//location for static content
app.use(express.static(__dirname + '/client'));

//Use Mlab url here

app.use(function(req,res,next){
	res.locals.currentUser = req.user;
	next();
});

app.get('/', function (req, res) {
	res.send('Please Use the API /api/book or /api/genre');
});

app.use('/api/book', bookRoute);
app.use('/api/genre', genreRoute);
//setup route for /auth/*
app.use('/auth', authRoutes);


app.listen(PORT);
console.log('Started BookStore application on port ' + PORT);
console.log('Open http://localhost:' + PORT + ' on your browser!');
