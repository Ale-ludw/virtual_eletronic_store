import { Router } from "express";

const route = Router();
import authController  from '../controller/authController.js';

route.post('/login', authController.login);
route.post('/signup', authController.signup);

export default route;