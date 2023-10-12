const mongoose = require("mongoose");

//Create a schema
const userSchema = new mongoose.Schema({
    name: String,
    mobile: String,
    age: Number

})

//Create a collection
const User = mongoose.model("User", userSchema);

module.exports = User;