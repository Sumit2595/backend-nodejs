const User = require("../models/userModel");
const UserController = {
    getAllUsers : async (req, res) => {
        try {
            console.log("entered")
            const users = await User.find();
            console.log("Users received",users)
            res.json(users)
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    addUser : async (req, res) => {
        const {name, mobile, age} = req.body;
        const newUser = new User({name, mobile, age});
        try {
            const savedUser = await newUser.save();
            res.json(savedUser);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = UserController;