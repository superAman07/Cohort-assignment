const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup',async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    // we have to check if the use with this username and password exist or not
    // if not then we have to create a new admin
    await Admin.create({ username, password }); // we can also do ({username:username,password:password})
    res.status(201).json({msg:'Admin Created successfully...'})
});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;
    //we should use zod here...
    const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price
    })
    //as output should be:   Output: { message: 'Course created successfully', courseId: "new course id" }
    //so we use here async-await to get the id(auto created in DB)
    res.json({
        message: 'Course created successfully',courseId:newCourse._id
    })
});

router.get('/courses', adminMiddleware,async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({});
    res.json({
        courses:response,
    });
});

module.exports = router;