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
exports.deleteQuestion = exports.editQuestion = exports.deleteOption = exports.editOption = exports.addOption = exports.addQuestion = exports.getAllOptions = exports.getAllQuestions = void 0;
const question_model_1 = require("../models/question.model");
const option_model_1 = require("../models/option.model");
const getAllQuestions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const questions = yield question_model_1.QuestionModel.find();
        res.status(200).json(questions);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.getAllQuestions = getAllQuestions;
const getAllOptions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const options = yield option_model_1.OptionModel.find();
        res.status(200).json(options);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.getAllOptions = getAllOptions;
const addQuestion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const question = yield new question_model_1.QuestionModel(req.body);
        console.log(question);
        yield question.save();
        return res.status(201).json(question);
    }
    catch (error) {
        return res.status(403).json(error);
    }
});
exports.addQuestion = addQuestion;
const addOption = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const option = yield new option_model_1.OptionModel(req.body);
        console.log(option);
        yield option.save();
        return res.status(201).json(option);
    }
    catch (error) {
        return res.status(403).json(error);
    }
});
exports.addOption = addOption;
const editOption = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updateOptions = yield option_model_1.OptionModel.findByIdAndUpdate(req.params.id, { $set: req.body, }, { new: true });
        res.status(200).json(updateOptions);
    }
    catch (err) {
        res.status(500).json(err);
    }
});
exports.editOption = editOption;
const deleteOption = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleteOptions = yield option_model_1.OptionModel.findByIdAndDelete({ _id: req.params.id });
        res.status(200).json(deleteOptions);
    }
    catch (err) {
        res.status(500).json(err);
    }
});
exports.deleteOption = deleteOption;
const editQuestion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updateQuestion = yield question_model_1.QuestionModel.findByIdAndUpdate(req.params.id, { $set: req.body, }, { new: true });
        res.status(200).json(updateQuestion);
    }
    catch (err) {
        res.status(500).json(err);
    }
});
exports.editQuestion = editQuestion;
const deleteQuestion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const removeQuestion = yield question_model_1.QuestionModel.findByIdAndDelete({ _id: req.params.id });
        res.status(200).json(removeQuestion);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.deleteQuestion = deleteQuestion;
