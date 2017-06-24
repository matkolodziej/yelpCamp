var express = require("express"),
    router = express.Router();

var passport = require("passport");
var User = require("../models/user");

router.get("/", function(req, res){
    res.render("landing");
});


// AUTH ROUTES
router.get("/register", function(req, res) {
    res.render("register");
})

router.post("/register", function(req, res){
    var newUser = new User({username: req.body.username});

    User.register(newUser, req.body.password, function(err, user) {
        if(err) {
            console.log(err);
            return res.render("register");
        }
        passport.authenticate("local")(req, res, function() {
            res.redirect("/campgrounds");
        });
    });
});

router.get("/login", function(req,res) {
    res.render("login");
});

router.post("/login", passport.authenticate("local", {
    successRedirect: "/campgrounds", 
    failureRedirect: "/login"
    }), function(req, res) {});

router.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/campgrounds");
});


module.exports = router;