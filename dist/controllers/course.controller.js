"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCourse = exports.EditCourse = exports.AddCourse = exports.GetAllCourses = void 0;
const course_model_1 = require("../models/course.model");
function GetAllCourses(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const courses = yield course_model_1.CourseModel.find();
        try {
            res.status(200).json(courses);
        }
        catch (error) {
            res.status(500).json(error);
        }
    });
}
exports.GetAllCourses = GetAllCourses;
const AddCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const course = yield new course_model_1.CourseModel(req.body);
        yield course.save();
        return res.status(201).json(course);
    }
    catch (error) {
        return res.status(403).json(error);
    }
});
exports.AddCourse = AddCourse;
const EditCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updateCourse = yield course_model_1.CourseModel.findByIdAndUpdate(req.params.id, { $set: req.body, }, { new: true });
        res.status(200).json(updateCourse);
    }
    catch (err) {
        res.status(500).json(err);
    }
});
exports.EditCourse = EditCourse;
const DeleteCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const removeCourse = yield course_model_1.CourseModel.findByIdAndDelete({ _id: req.params.id });
        res.status(200).json(removeCourse);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.DeleteCourse = DeleteCourse;
