import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    items: {
        type: Array
    },
    customerInfo: {
        type: Object,
        required: true,
    },
    totalPrice: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum: ["Hủy", "Chờ xác nhận", "Đóng gói", "Đang giao", "Hoàn thành"],
        default: "Chờ xác nhận",
    },
}, { timestamps: true, versionKey: false });
export default mongoose.model("Order", orderSchema);
