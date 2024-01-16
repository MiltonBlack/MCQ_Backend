const router = require("express").Router();
const Question = require("../models/question");
const Options = require("../models/option");
const verify = require("../services/verify");

// Get All Questions
router.get("/all", verify, async (req, res) => {
    try {
        const questions = await Question.find();
        res.status(200).json(questions);
    } catch (error) {
        res.status(500).json(error);
    }
});

// Get All Options
router.get("/options", verify, async (req, res) => {
    try {
        const options = await Options.find();
        res.status(200).json(options);
    } catch (error) {
        res.status(500).json(error);
    }
});

// Add a Question
router.post("/add", verify, async (req, res) => {
    try {
        const question = await new Question(req.body);
        console.log(question);
        await question.save();
        return res.status(201).json(question);
    } catch (error) {
        return res.status(403).json(error);
    }
});

// Add Options to a Question
router.post("/add-option", verify, async (req, res) => {
    try {
        const option = await new Options(req.body);
        console.log(option);
        await option.save();
        return res.status(201).json(option);
    } catch (error) {
        return res.status(403).json(error);
    }
});

// Edit Options to a Question
router.put("/update-option/:id", verify, async (req, res) => {
    try {
        const updateOptions = await Options.findByIdAndUpdate(req.params.id, { $set: req.body, }
            , { new: true });
        res.status(200).json(updateOptions);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Delete Options to a Question
router.delete("/delete-option/:id", verify, async (req, res) => {
    try {
        const deleteOptions = await Options.findByIdAndDelete({ _id: req.params.id });
        res.status(200).json(deleteOptions);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Edit a Question
router.put("/edit/:id", verify, async (req, res) => {
    try {
        const updateQuestion = await Question.findByIdAndUpdate(req.params.id, { $set: req.body, }
            , { new: true });
        res.status(200).json(updateQuestion);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Delete a Question
router.delete("/delete/:id", verify, async (req, res) => {
    try {
        const removeQuestion = await Question.findByIdAndDelete({ _id: req.params.id });
        res.status(200).json(removeQuestion);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;