import { Router } from "express";
import {
    addItemToCart,
    decreaseProductQuantity,
    getCartByUserId,
    increaseProductQuantity,
    removeAllItem,
    removeFromCart,
    updateProductQuantity,
} from "../controllers/cart";

const router = Router();

// lấy danh sách sản phẩm trong giỏ hàng dựa vào ID
router.get("/cart/:userId", getCartByUserId);
// Thêm sản phẩm vào giỏ hàng
router.post("/cart/add-to-cart", addItemToCart);
// Cập nhật số lượng của sản phẩm trong giỏ hàng từ input
router.post("/cart/update", updateProductQuantity);
// Xóa item trong giỏ hàng
router.post("/cart/remove", removeFromCart);
// Xóa toàn bộ item trong giỏ hàng
router.put("/cart/clear", removeAllItem);
// Tăng số lượng của sản phẩm trong giỏ hàng
router.put("/cart/increase", increaseProductQuantity);
// Giảm số lượng của sản phẩm trong giỏ hàng
router.put("/cart/decrease", decreaseProductQuantity);

export default router;
