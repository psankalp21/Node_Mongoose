import express, { Router } from 'express';
import {post} from '../controller/post';
import {verifyToken} from '../middlewares/jwt'
const router: Router = express.Router();
router.post('/post', verifyToken ,post);
export default router;
