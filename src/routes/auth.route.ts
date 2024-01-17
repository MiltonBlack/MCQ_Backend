import { Router } from "express";
import { Login, Signup } from "../controllers/auth.controller";

const router = Router();

// Signup Lecturer
router.route("/signup").post(Signup);

//Login Lecturer
router.route("/signin").post(Login);

export default router;