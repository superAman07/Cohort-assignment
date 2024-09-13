const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://superAman:superaman@cluster0.ggryr.mongodb.net/todos");// we should always put this in .env file
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const todo = mongoose.model('todos',todoSchema);

module.exports={
    todo  // or todo:todo, (here name are same do)
}