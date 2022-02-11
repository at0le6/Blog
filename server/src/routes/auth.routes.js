import { Router } from 'express'
import { publicsignUp, signIn } from "../controllers/auth.controllers";
import { authoritations, verify } from '../middleware';
const router = Router();

router.post('/signIn', signIn)
router.post('/signUp', [verify.checkDuplicateUsernameOrEmail], publicsignUp)
export default router;