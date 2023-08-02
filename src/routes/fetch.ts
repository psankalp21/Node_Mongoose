import express, { Router } from 'express';
import {fetchProfile} from '../controller/fetchProfile';
import {verifyToken} from '../middlewares/jwt'
const router: Router = express.Router();
router.post('/fetch', verifyToken ,fetchProfile);
export default router;
