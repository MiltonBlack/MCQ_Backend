import { Response, Request} from 'express'
import { TypedResponse } from '../typings/express';
import CryptoJS from 'crypto-js';
import jwt from 'jsonwebtoken';
import { Auth } from '../models/auth.model';
import { UserInterface } from '../typings/helper';

const secret = process.env.SECRET_KEY as string;

export const Signup = async (req: Request, res: Response) => {
    const lecturer = await new Auth({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        schoolName: req.body.schoolName,
        password: CryptoJS.AES.encrypt(req.body.password, secret).toString(),
        accessID: req.body.accessID
    });
    try {
        const user = await lecturer.save();
        return res.status(201).json(user);
    } catch (err) {
        return res.status(500).json(err);
    }
}

export const Login = async (req: Request, res: TypedResponse<UserInterface>) => {
    const user:any = await Auth.findOne({ email: req.body.email });
    try {
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Passwords do not match",
                errors: {},
              });
        } else {
            console.log(user);
            const bytes = await CryptoJS.AES.decrypt(user.password as string, process.env.SECRET_KEY as string);
            const realPassword = await bytes.toString(CryptoJS.enc.Utf8);

            if (realPassword !== req.body.password) {
                return res.status(401).json({
                    success: false,
                    message: "Passwords do not match",
                    errors: {},
                  });
            }
            const token = await jwt.sign({
                id: user._id, email: user.email
            },
                process.env.SECRET_KEY as string, { expiresIn: "7d" }
            );
            const { password, ...info } = user._doc;
            return res.status(200).json({ ...info , token});
        }
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            errors: {err},
          })
    }
}