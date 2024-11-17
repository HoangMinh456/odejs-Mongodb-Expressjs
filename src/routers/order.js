import { Router } from "express";
import { createOrder, getOrderById, getOrders, updateOrderStatus } from "../controllers/order";

const router = Router();

router.post("/order", createOrder);
router.get("/order", getOrders);
router.get("/order/:orderId", getOrderById);
router.put("/order/change", updateOrderStatus)

export default router;
