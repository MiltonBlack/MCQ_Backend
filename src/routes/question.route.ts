import { Router } from "express";
import { verify } from "../services/verify";
import { getAllQuestions, getAllOptions, addQuestion, addOption, deleteQuestion, deleteOption, editOption, editQuestion } from "../controllers/question.controller";

const router = Router();

// Get All Questions
router.route("/all").get(verify, getAllQuestions);

// Get All Options
router.route("/options").get(verify, getAllOptions);

// Add a Question
router.route("/add").post(verify, addQuestion);

// Add Options to a Question
router.route("/add-option").post(verify, addOption);

// Edit Options to a Question
router.route("/update-option/:id").put(verify, editOption)

// Delete Options to a Question
router.route("/delete-option/:id").delete(verify, deleteOption);

// Edit a Question
router.route("/edit/:id").put(verify, editQuestion);

// Delete a Question
router.route("/delete/:id").delete(verify, deleteQuestion)

export default router;