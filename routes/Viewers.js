import { Router } from "express";
import Viewers from '../controllers/Viewers';

const router = Router();

router.post('/create', Viewers.create)

export default router;