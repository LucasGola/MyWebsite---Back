import { Router } from "express";
import Courses from '../controllers/Courses/index.js';

const router = Router();

router.post('/create', Courses.create);

export default router;