var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest",
        image: "https://farm8.staticflickr.com/7457/9586944536_9c61259490.jpg",
        description: "blah blah blah"
    },
    {
        name: "Desert Mesa",
        image: "https://farm8.staticflickr.com/7285/8737935921_47343b7a5d.jpg",
        description: "blah blah blah"
    },
    {
        name: "Forest Rest",
        image: "https://farm9.staticflickr.com/8471/8137270056_21d5be6f52.jpg",
        description: "blah blah blah"
    }
];

function seedDB() {
    // Remove all campgrounds
    Campground.remove({}, function(err) {
        if(err) {
            console.log(err);
        } else {
            console.log("Removed Campgrounds");
            // Add few campgrounds
            data.forEach(function(seed){
                Campground.create(seed, function(err, campground){
                    if(err) {
                        console.log(err);
                    } else {
                        console.log("added campground");
                        //Create a comment
                        Comment.create({
                            text: "this place is great, but i wish there was internet",
                            author: "Homer"
                        }, function(err, comment){
                            if(err) {
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Comment created");
                            }
                        });
                    }
                });
            });
        }
    });
}

module.exports = seedDB;