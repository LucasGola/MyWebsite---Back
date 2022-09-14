import { Router } from 'express';
import Courses from './Courses';
import Viewers from './Viewers';

const router = Router();

router.use('/courses', Courses);
router.use('/viewers', Viewers);

export default router;