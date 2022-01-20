import { Router } from 'express'
import { updateUser, privatesignUp } from "../controllers/auth.controllers";
import { authoritations, verify } from '../middleware';
const router = Router();

router.post('/sigUpAdmon', [authoritations.verifyToken, authoritations.isAdmin, verify.checkDuplicateUsernameOrEmail, verify.checkRolesExisted], privatesignUp)
router.post('/updateAdmon', [authoritations.verifyToken, authoritations.isAdmin], updateUser)
export default router;