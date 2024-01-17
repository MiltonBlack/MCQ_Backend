import { Router} from 'express'
import {verify} from '../services/verify'
import { GetAllCourses, AddCourse, EditCourse, DeleteCourse } from '../controllers/course.controller';

const router = Router()

// Get All Courses
router.route("/all").get(verify, GetAllCourses);

// Add Course
router.route("/add").post(verify, AddCourse)

// Edit Course
router.route("/edit/:id").put(verify, EditCourse);

// Delete Course
router.route("/delete/:id").delete(verify, DeleteCourse)

export default router