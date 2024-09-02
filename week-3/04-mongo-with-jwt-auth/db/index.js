const mongoose = require('mongoose');
const { string } = require('zod');

// Connect to MongoDB
mongoose.connect('mongodb+srv://superAman:superaman@cluster0.ggryr.mongodb.net/course_selling_app2');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username:String,
    password:String
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username:String,
    password:String,
    purchasedCourses:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Course'
    }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title:String,
    description:String,
    imageLink:String,
    price:Number
});

const Admin = mongoose.model('Admin', AdminSchema); // admins by default it'll make the table name as Admin->admins
const User = mongoose.model('User', UserSchema);//users and for more use chatgpt
const Course = mongoose.model('Course', CourseSchema);//courses

module.exports = {
    Admin,
    User,
    Course
}