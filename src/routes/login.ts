import express, { Router } from 'express';
import {login} from '../controller/login';
import {joi_login} from '../middlewares/joi'

const router: Router = express.Router();
router.post('/login', joi_login ,login);
export default router;
