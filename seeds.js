var mongoose = require("mongoose");
var Job = require("./models/jobs.js");

var data = [
        {
            title: "Construction Escavator-CAT", 
            image: "https://ibin.co/w800/3cTokWVyyICM.jpg",
            description: "blah blah blah"
        },
        {
            title: "Construction Tonka-VOLVO", 
            image: "https://ibin.co/w800/3cXK2jS0fo4e.jpg",
            description: "blah blah blah"
        },
        {
            title: "Semi Truck", 
            image: "https://ibin.co/w800/3cXKGTBJyJKC.jpg",
            description: "blah blah blah"
        },
        {
            title: "Construction - Plexiglass", 
            image: "https://ibin.co/w800/3cXKYtH7no8X.jpg",
            description: "blah blah blah"
        },
        {
            title: "RV", 
            image: "https://ibin.co/w800/3cXKnFilhpLd.jpg",
            description: "blah blah blah"
        },
        {
            title: "Pick Up Truck", 
            image: "https://ibin.co/w800/3cXL471k1ujY.jpg",
            description: "blah blah blah"
        }
    ]
    
function seedDB(){
    Job.remove({}, function(err){
        if(err){
            console.log(err);
        }
        else{
            console.log("removed gallery jobs");
            data.forEach(function(seed){ //job refers to seed, seed contains an element from the data array
                Job.create(seed, function(err,job){
                    if(err){
                        console.log(err);
                    }
                    else{
                        console.log("Added Job Image");
                        
                    }
                });
            });
        }
    });
}

module.exports = seedDB;