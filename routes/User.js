import express from 'express';
import User from '../controller/User';

const router = express.Router();

router.post('/login',);
router.post('/create', User.createUserRoute);
router.post('/logout',);
router.get('/getLoginEvent/:id',);
router.get('/getAllLoginEvents',);
router.patch('/updateUser/:id',);
router.delete('/deleteUser/:id',);

export default router;