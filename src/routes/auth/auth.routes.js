import { Router } from "express";
import { register, login, findUser } from "../../controllers/auth/auth.controller.js";
import { validateToken } from "../../middleware/validateToken.js";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.get("/find-user", validateToken, findUser);

export default router;