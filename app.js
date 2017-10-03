//Test Version

var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var serverStatic = require('serve-static');
var mongoose = require("mongoose");
var Job = require("./models/jobs");
var Contact = require("./models/contacts");
var seedDB = require("./seeds");
var expressSanitizer = require("express-sanitizer");

mongoose.connect("mongodb://localhost/condeDB");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
//need this line to attach my css
app.use(express.static(__dirname + "/public"));
//need this line to attach my images
app.use(express.static(__dirname + "/images"));
app.use(expressSanitizer());

// seedDB();
// console.log(__dirname);

//schema
// var clientSchema = new mongoose.Schema({
//     name: String,
//     email: String
// });

// var Client = mongoose.model("Client", clientSchema);

    // Client.create(
    // {
    //     name: "Cesar",
    //     email: "cesar.g@gmail.com"
    // }, function(err, clients){
    //     if(err){
    //         console.log(err);
    //     }
    //     else{
    //         console.log("CREATED CLIENT");
    //     }
    // });
    
//     Client.find({}, function(err, clients){
//     if(err){
//         console.log("ERROR!");
//         console.log(err);
//     } else{
//         console.log(clients);
//     }
// });

//passing jobs into gallery, essentially pushing the db into the page
app.get("/", function(req, res){
    res.render("home");
});
app.get("/home", function(req, res){
    res.render("home");
});


app.get("/home/services", function(req, res){
    res.render("services");
});
//New Route
app.get("/home/contact", function(req, res){
    res.render("contact");
});

//Create Route
app.post("/home", function(req, res){
   req.body.contact.info = req.sanitize(req.body.contact.info);
   Contact.create(req.body.contact, function(err, newContact){
       if(err){
           res.render("contact");
       }
       else{
           console.log(req.body.contact);
           res.redirect("/home");
       }
   })
   
});

app.get("/home/gallery", function(req, res){
    Job.find({}, function(err, allJobs){
        if(err){
            console.log(err);
        }
        else{
            res.render("gallery", {jobs: allJobs});
        }
    })
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("SUPER GREEN!");
});
  