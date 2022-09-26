import { Router } from "express";
import Users from '../controllers/Users';

const router = Router();

router.post('/register', Users.register)

export default router;