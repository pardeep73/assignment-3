import { Router } from "express";
import { authenticated, BuyProduct, Login, Logout, Register } from "../controllers/user.controller.js";
import { authenticate } from "../middlewares/Authentication.js";

const router = Router();

router.route('/register').post(Register);
router.route('/login').post(Login);
router.route('/logout').post(authenticate,Logout);
router.route('/authenticated').post(authenticate,authenticated);
router.route('/buy/:id').post(authenticate,BuyProduct);

export default router;