import { Router } from "express";
import {
    createAttribute,
    createValueAttribute,
    deleteAttribute,
    getAllAttributes,
    getAttributeById,
    getAttributeByIdPro,
    updateAttribute,
} from "../controllers/attribute";

const router = Router();
// Route để tạo mới một thuộc tính
router.post("/attribute", createAttribute);

// Route để lấy tất cả các thuộc tính
router.get("/attribute", getAllAttributes);

// Route để lấy một thuộc tính theo ID
router.get("/attribute/:id", getAttributeById);

// Route để lấy một thuộc tính theo ID Product
router.get("/attributes/:id", getAttributeByIdPro);

// Route để cập nhật một thuộc tính theo ID
router.put("/attribute/:id", updateAttribute);

// Route để xóa một thuộc tính theo ID
router.delete("/attribute/:id", deleteAttribute);

export default router;
