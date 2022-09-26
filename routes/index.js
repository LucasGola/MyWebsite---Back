import { Router } from 'express';
import Courses from './Courses';
import Viewers from './Viewers';
import Users from './Users'

const router = Router();

router.use('/users', Users)
router.use('/courses', Courses);
router.use('/viewers', Viewers);

export default router;