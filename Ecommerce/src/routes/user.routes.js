import { Router } from "express";
import { Login, Logout, Register } from "../controllers/user.controller.js";
import { authenticate } from "../middlewares/Authentication.js";

const router = Router();

router.route('/register').post(Register);
router.route('/login').post(Login);
router.route('/logout').post(authenticate,Logout);

export default router;