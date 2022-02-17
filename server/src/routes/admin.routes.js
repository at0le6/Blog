import { Router } from 'express'
import { updateUser, privatesignUp,getAdmonPost } from "../controllers/auth.controllers";
import { authoritations, verify } from '../middleware';
const router = Router();

router.post('/sigUpAdmon', [authoritations.verifyToken, authoritations.isAdmin, verify.checkDuplicateUsernameOrEmail, verify.checkRolesExisted], privatesignUp)
router.post('/updateAdmon', [authoritations.verifyToken, authoritations.isAdmin, verify.checkDuplicateUsernameOrEmail, verify.checkRolesExisted], updateUser)
router.get('',[authoritations.verifyToken, authoritations.isAdmin, verify.checkDuplicateUsernameOrEmail, verify.checkRolesExisted],getAdmonPost)
export default router;