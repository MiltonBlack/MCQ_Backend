"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const verify_1 = require("../services/verify");
const question_controller_1 = require("../controllers/question.controller");
const router = (0, express_1.Router)();
// Get All Questions
router.route("/all").get(verify_1.verify, question_controller_1.getAllQuestions);
// Get All Options
router.route("/options").get(verify_1.verify, question_controller_1.getAllOptions);
// Add a Question
router.route("/add").post(verify_1.verify, question_controller_1.addQuestion);
// Add Options to a Question
router.route("/add-option").post(verify_1.verify, question_controller_1.addOption);
// Edit Options to a Question
router.route("/update-option/:id").put(verify_1.verify, question_controller_1.editOption);
// Delete Options to a Question
router.route("/delete-option/:id").delete(verify_1.verify, question_controller_1.deleteOption);
// Edit a Question
router.route("/edit/:id").put(verify_1.verify, question_controller_1.editQuestion);
// Delete a Question
router.route("/delete/:id").delete(verify_1.verify, question_controller_1.deleteQuestion);
exports.default = router;
