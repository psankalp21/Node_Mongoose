import express, { Router } from 'express';
import {follow} from '../controller/follow';
import {verifyToken} from '../middlewares/jwt'
const router: Router = express.Router();
router.post('/follow', verifyToken ,follow);
export default router;
