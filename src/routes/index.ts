import express, { Router } from 'express';
import signup from './signup';
import login from './login';
import follow from './follow';
import fetch from './fetch';
const router: Router = express.Router();

router.use('/ig',signup,login,follow,fetch);

export default router;
