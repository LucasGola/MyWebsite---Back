import { Router } from "express";
import Viewers from '../controllers/Viewers';

const router = Router();

router.post('/create', Viewers.create);
router.patch('/confirmRepli/:id', Viewers.markAnswered)

export default router;