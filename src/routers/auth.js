import express from "express";
import { getAllUser, signin, signup } from "../controllers/auth";
import { checkAuth } from "../middleware/checkAuth";
const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/user", getAllUser);
export default router;
