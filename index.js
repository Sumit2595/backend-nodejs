require('dotenv').config()
const mongoose = require("mongoose");
const UserController = require("./controllers/userController")

const express = require('express');
const app = express();
app.use(express.json());


//Connect and Handle deprecation warnings
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true});

const PORT = process.env.PORT || 3000;
app.get("/get-users", UserController.getAllUsers)

app.post("/add-user", UserController.addUser)




app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})