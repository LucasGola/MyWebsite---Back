import express from 'express';

const router = express.Router();

router.post('/createFormation');
router.get('/getFormation/:id');
router.get('/getAllFormations');
router.patch('/updateFormation/:id');
router.delete('/deleteFormation/:id');

export default router;