import { Router } from "express";
import Courses from '../controllers/Courses';

const router = Router();

router.post('/create', Courses.create);
router.patch('/rateCourse/:id', Courses.rateCourse);
router.patch('/updateCourseStatus/:id', Courses.updateCourseStatus);
router.patch('/updateCourseInfos/:id', Courses.updateCourseInfos)
router.get('/getCourse/:id', Courses.getCourseById);
router.get('/getAll', Courses.getAll);

export default router;