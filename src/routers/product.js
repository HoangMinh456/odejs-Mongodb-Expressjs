import { Router } from "express";
import {
    create,
    deleteProductById,
    get4NewProducts,
    getAllProducts,
    getProductById,
    related,
    updateProductById,
} from "../controllers/product";
import { checkAuth } from "../middleware/checkAuth";

const router = Router();
router.get("/products", getAllProducts);
router.get("/productslatest", get4NewProducts);
router.get("/products/:id", getProductById);
router.get("/products/:idPro/:idAttribute", related);
router.delete("/products/:id", deleteProductById);
router.put("/products/:id", updateProductById);
router.post("/products", checkAuth, create);
export default router;
