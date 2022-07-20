import express from 'express';

const router = express.Router();

router.post('/createViewer');
router.patch('/updateViewer/:id')

export default router;