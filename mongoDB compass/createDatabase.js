const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const jwtPassword = "123456";

// Connect to MongoDB
mongoose.connect("mongodb+srv://superAman:superaman@cluster0.ggryr.mongodb.net/")
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Failed to connect to MongoDB", err));

// Define User model
const User = mongoose.model("User", {
  name: String,
  username: String,
  password: String, // Corrected field name
});
// Insert data
async function insertData(){
  const users=[
    {
      name: "Aman",
      username: "aman",
      password: "123456" // Corrected field name
    },
    {
      name: "Aman2",
      username: "aman2",
      password: "123456" // Corrected field name
    }
  ];
  try {
    await User.insertMany(users);
    console.log("Data inserted successfully!");
  } catch(err){
    console.error("Error inserting data:",err);
  }finally{
    // mongoose.connection.close();
  }
}

insertData();

const app = express();
app.use(express.json());

// Check if user exists
async function userExists(username, password) {
  // Check in the database for a user with the given username and password
  const user = await User.findOne({ username, password });
  return user !== null;
}

// Sign-in endpoint
app.post("/signin", async function (req, res) {
  const { username, password } = req.body;

  if (!await userExists(username, password)) {
    return res.status(403).json({ msg: "User doesn't exist in our database" });
  }

  const token = jwt.sign({ username }, jwtPassword);
  return res.json({ token });
});

// Users endpoint
app.get("/users", async function (req, res) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ msg: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;

    // Retrieve all users except the authenticated user
    const users = await User.find({ username: { $ne: username } });
    return res.json(users);
  } catch (err) {
    return res.status(403).json({ msg: "Invalid token" });
  }
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

mongoose.connection.close();