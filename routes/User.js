import express from 'express';

const router = express.Router();

router.post('/login');
router.post('/logout');
router.get('/getLoginEvent/:id');
router.get('/getAllLoginEvents');
router.patch('/updateUser/:id');
router.delete('/deleteUser/:id');

export default router;