import { Router } from "express";
import Users from '../controllers/Users';

const router = Router();

router.post('/register', Users.register)
router.post('/login', Users.login)

export default router;