import { Router } from 'express';

import Courses from './Courses';

const router = Router();

router.use('/courses', Courses);

export default router;