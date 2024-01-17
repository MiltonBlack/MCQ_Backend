    /**************************************************************************************** *
     * ******************************                    ************************************ *
     * ******************************   ALL APP ROUTES   ************************************ *
     * ******************************                    ************************************ *
     * ************************************************************************************** */

import { Request, Response, Router } from 'express';
import authRoute from '../routes/auth.route';
import courseRoute from '../routes/course.route';
import questionRoute from '../routes/question.route';

const router = Router();

/** GET /health-check - Check service health */
router.get('/health-check', (_req: Request, res: Response) => 
res.send({ check: 'Automated MCQ Generator server started ok' })
);

// mount all auth routes
router.use("/api/auth", authRoute);

// mount all course routes
router.use("/api/course", courseRoute);

// mount all question routes
router.use("/api/question", questionRoute);

export default router;