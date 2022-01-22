import { Router } from 'express'
import { getPostId, getPostsIdUser, createPost, updatePost, deletePost, getPosts } from '../controllers/post.controllers'
import { authoritations, verify } from '../middleware';
const router = Router();
router.route('/').get(getPosts).post([authoritations.verifyToken, verify.userExist], createPost)
router.route('/:id').get(getPostId).patch([authoritations.verifyToken, verify.userExist], updatePost).delete([authoritations.verifyToken, verify.userExist], deletePost)
router.route('/user/:id').get(getPostsIdUser);
export default router