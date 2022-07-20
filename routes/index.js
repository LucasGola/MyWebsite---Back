import express from 'express';
import User from './User'
import Formation from './Formation'
import Courses from './Courses'
import Contact from './Contact'

const router = express.Router();

router.use('/', User);
router.use('/formation', Formation)
router.use('/courses', Courses)
router.use('/contact', Contact)