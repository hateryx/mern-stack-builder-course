import express from "express";
const router = express.Router();

import { register, login, updateUser } from "../controllers/authController.js";
import authenticateUser from '../middleware/auth.js'

router.route("/register").post(register);
router.route("/login").post(login);

/*previous version before authenticateUser from ../middleware/auth was imported

router.route("/updateUser").patch(updateUser);
*/

router.route("/updateUser").patch(authenticateUser, updateUser);

export default router;
