var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest",
        image: "https://farm8.staticflickr.com/7457/9586944536_9c61259490.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lobortis augue id eros varius suscipit. Ut eget rhoncus sem, vitae vehicula est. Nullam vestibulum vel neque ut tempus. Vivamus quis nunc quam. Phasellus ultricies dictum felis, bibendum varius massa feugiat vitae. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam nec libero sit amet mauris tempus tincidunt. Aliquam sollicitudin lobortis nisl, ac fermentum nunc posuere in. Vestibulum pellentesque luctus massa, a interdum arcu. Duis sed purus eros. Nullam eget magna et erat viverra elementum non eu sem. Integer consequat sem quis diam vulputate, in tempus orci sollicitudin. Aenean bibendum tempor sem, id fermentum dolor mollis nec. Quisque dictum ante et mattis commodo. Mauris ac sollicitudin erat."
    },
    {
        name: "Desert Mesa",
        image: "https://farm8.staticflickr.com/7285/8737935921_47343b7a5d.jpg",
        description: "Vivamus quis ultrices odio, a semper ipsum. Vivamus et rutrum odio, semper sodales turpis. Integer laoreet mauris nunc. Sed id sollicitudin neque, luctus suscipit risus. Vestibulum tincidunt lacus eros, sodales commodo neque condimentum eget. Donec laoreet venenatis eros ac porta. Proin dignissim vehicula mollis. Aliquam vestibulum tellus in dolor dignissim feugiat. Maecenas interdum a enim ac porttitor. Quisque convallis purus vel mauris porta, quis ultricies purus maximus. Cras scelerisque magna a rhoncus finibus."
    },
    {
        name: "Forest Rest",
        image: "https://farm9.staticflickr.com/8471/8137270056_21d5be6f52.jpg",
        description: "Pellentesque laoreet arcu eget mi laoreet, vitae fringilla turpis tincidunt. Proin ut sem elit. Phasellus condimentum eu urna pulvinar vestibulum. Morbi cursus tortor quis dui semper ultrices. Cras porttitor, nibh ac consectetur fringilla, leo turpis pharetra quam, eu faucibus mi nisi eu magna. Nullam varius urna felis, egestas porttitor justo malesuada a. In finibus fermentum lacus, ut auctor diam ultrices vel. Donec at ante nec nisi sodales efficitur id ac mi. Sed non lacinia metus, et consectetur sem. Nullam iaculis nibh vitae consequat hendrerit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus maximus, nulla a euismod auctor, augue ipsum euismod mi, eu ornare massa ante vestibulum nisi. Etiam leo neque, posuere quis quam in, sagittis maximus sapien. In sit amet convallis elit, non mattis nisi. Phasellus pretium, enim a pretium auctor, lacus turpis interdum diam, porta fermentum risus arcu vitae ante. Cras ut lorem ut risus fringilla dapibus vitae non arcu."
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
                            author: "Homer",
                            text: "this place is great, but i wish there was internet"
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