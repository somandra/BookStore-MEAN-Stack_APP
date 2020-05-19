'use strict';
var express = require("express")
var router = express.Router();
var passport = require("passport")
var User = require("../models/user-model")

//auth login
router.get("/register",function (req,res) {
	res.render("../client/views/register.html")
});

router.post("/register", function(req,res){
	var newUser = new User({username: req.body.username});
	User.register(newUser, req.body.password, function(err, user){
		if (err) {
			console.log(err)
			return res.render("../client/views/register.html")
		}
		passport.authenticate("local")(req,res, function(){
			res.redirect("/#/auth/login")
		});
	});
});


router.get("/login", function(req,res){
	res.render("../client/views/login.html");
});

router.post("/login", passport.authenticate("local", {
		successRedirect: "/#/loggedin",
		failureRedirect: "/#/auth/login"
	}) ,function(req,res){
});

router.get("/logout", function(req,res){
	req.logout();
	res.redirect("/")
});

function isLoggedIn(req, res, next) {
	if(req.isAuthenticated()){
		return next();
	}
	res.redirect("/login")
}

module.exports = router;