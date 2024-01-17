import {Response, Request} from 'express'
import { QuestionModel } from '../models/question.model'
import { OptionModel } from '../models/option.model';

export const getAllQuestions = async (req: Request, res: Response) => {
    try {
        const questions = await QuestionModel.find();
        res.status(200).json(questions);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const getAllOptions = async (req: Request, res: Response) => {
    try {
        const options = await OptionModel.find();
        res.status(200).json(options);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const addQuestion = async (req: Request, res: Response) => {
    try {
        const question = await new QuestionModel(req.body);
        console.log(question);
        await question.save();
        return res.status(201).json(question);
    } catch (error) {
        return res.status(403).json(error);
    }
}

export const addOption =  async (req: Request, res:Response) => {
    try {
        const option = await new OptionModel(req.body);
        console.log(option);
        await option.save();
        return res.status(201).json(option);
    } catch (error) {
        return res.status(403).json(error);
    }
}

export const editOption = async (req:Request, res:Response) => {
    try {
        const updateOptions = await OptionModel.findByIdAndUpdate(req.params.id, { $set: req.body, }
            , { new: true });
        res.status(200).json(updateOptions);
    } catch (err) {
        res.status(500).json(err);
    }
}

export const deleteOption = async (req:Request, res:Response) => {
    try {
        const deleteOptions = await OptionModel.findByIdAndDelete({ _id: req.params.id });
        res.status(200).json(deleteOptions);
    } catch (err) {
        res.status(500).json(err);
    }
}

export const editQuestion = async (req:Request, res: Response) => {
    try {
        const updateQuestion = await QuestionModel.findByIdAndUpdate(req.params.id, { $set: req.body, }
            , { new: true });
        res.status(200).json(updateQuestion);
    } catch (err) {
        res.status(500).json(err);
    }
}

export const deleteQuestion = async (req:Request, res:Response) => {
    try {
        const removeQuestion = await QuestionModel.findByIdAndDelete({ _id: req.params.id });
        res.status(200).json(removeQuestion);
    } catch (error) {
        res.status(500).json(error);
    }
}