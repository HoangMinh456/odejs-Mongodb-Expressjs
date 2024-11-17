import { Router } from "express";
import {
    create,
    deleteCategoryById,
    getAll,
    getCategoryById,
    updateCategoryById,
} from "../controllers/category";
import { checkAuth } from "../middleware/checkAuth";

const router = Router();
router.get("/category", getAll);
router.get("/category/:id", getCategoryById);
router.delete("/category/:id", deleteCategoryById);
router.put("/category/:id", checkAuth, updateCategoryById);
router.post("/category", create);
export default router;
