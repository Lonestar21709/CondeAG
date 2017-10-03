var mongoose = require("mongoose");

var jobsSchema = new mongoose.Schema({
    title: String,
    image: String,
    description: String
});

//create model based on schema
module.exports = mongoose.model("Job", jobsSchema);