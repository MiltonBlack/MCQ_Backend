"use strict";
/**************************************************************************************** *
 * ******************************                    ************************************ *
 * ******************************   ALL APP ROUTES   ************************************ *
 * ******************************                    ************************************ *
 * ************************************************************************************** */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_route_1 = __importDefault(require("../routes/auth.route"));
const course_route_1 = __importDefault(require("../routes/course.route"));
const question_route_1 = __importDefault(require("../routes/question.route"));
const router = (0, express_1.Router)();
/** GET /health-check - Check service health */
router.get('/health-check', (_req, res) => res.send({ check: 'Automated MCQ Generator server started ok' }));
// mount all auth routes
router.use("/api/auth", auth_route_1.default);
// mount all course routes
router.use("/api/course", course_route_1.default);
// mount all question routes
router.use("/api/question", question_route_1.default);
exports.default = router;
