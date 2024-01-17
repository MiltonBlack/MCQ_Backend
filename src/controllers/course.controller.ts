import { Response, Request} from 'express'
import { CourseModel } from '../models/course.model';

export async function GetAllCourses(req: Request, res: Response) {
    const courses = await CourseModel.find();
    try {
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const AddCourse = async(req: Request, res: Response)=> {
    try {
        const course = await new CourseModel(req.body);
        await course.save();
        return res.status(201).json(course);
    } catch (error) {
        return res.status(403).json(error)
    }
}

export const EditCourse = async(req: Request, res: Response)=> {
    try {
        const updateCourse = await CourseModel.findByIdAndUpdate(req.params.id, { $set: req.body, }
            , { new: true });
        res.status(200).json(updateCourse);
    } catch (err) {
        res.status(500).json(err);
    }
}

export const DeleteCourse = async(req: Request, res: Response)=> {
    try {
        const removeCourse = await CourseModel.findByIdAndDelete({ _id: req.params.id });
        res.status(200).json(removeCourse);
    } catch (error) {
        res.status(500).json(error);
    }
}