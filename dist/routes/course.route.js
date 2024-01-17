"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const verify_1 = require("../services/verify");
const course_controller_1 = require("../controllers/course.controller");
const router = (0, express_1.Router)();
// Get All Courses
router.route("/all").get(verify_1.verify, course_controller_1.GetAllCourses);
// Add Course
router.route("/add").post(verify_1.verify, course_controller_1.AddCourse);
// Edit Course
router.route("/edit/:id").put(verify_1.verify, course_controller_1.EditCourse);
// Delete Course
router.route("/delete/:id").delete(verify_1.verify, course_controller_1.DeleteCourse);
exports.default = router;
