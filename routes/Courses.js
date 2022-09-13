import { Router } from "express";
import Courses from '../controllers/Courses';

const router = Router();

router.post('/create', Courses.create);
router.post('/rateCourse/:id', Courses.rateCourse)
router.get('/getCourse/:id', Courses.getCourseById);
router.get('/getAll', Courses.getAll);

export default router;