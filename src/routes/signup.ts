import express, { Router } from 'express';
import {signup} from '../controller/signup';

const router: Router = express.Router();
router.post('/signup', signup);
export default router;
