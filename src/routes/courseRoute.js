const router = require("express").Router();
const Course = require("../models/course");
const verify = require("../services/verify");

// Get All Courses
router.get("/all", verify, async(req, res)=> {
    const courses = await Course.find();
    try {
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json(error);
    }
});

// Add Course
router.post("/add", async(req, res)=> {
    try {
        const course = await new Course(req.body);
        console.log(req.body);
        await course.save();
        return res.status(201).json(course);
    } catch (error) {
        return res.status(403).json(error)
    }
});

// Edit Course
router.put("/edit/:id", verify, async(req, res)=> {
    try {
        const updateCourse = await Course.findByIdAndUpdate(req.params.id, { $set: req.body, }
            , { new: true });
        res.status(200).json(updateCourse);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Delete Course
router.delete("/delete/:id", verify, async(req, res)=> {
    try {
        const removeCourse = await Course.findByIdAndDelete({ _id: req.params.id });
        res.status(200).json(removeCourse);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;