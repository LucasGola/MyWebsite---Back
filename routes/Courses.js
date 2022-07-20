import express from 'express';

const router = express.Router();

router.post('/createCourse');
router.get('/getCourse/:id');
router.get('/getAllCourses');
router.patch('/updateCourse/:id');
router.delete('/deleteCourse/:id');

export default router;