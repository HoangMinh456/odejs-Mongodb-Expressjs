import mongoose, { Schema } from "mongoose";

const cartSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        products: [
            {
                productItem: {
                    type: Schema.Types.ObjectId,
                    ref: "Product",
                    required: true,
                },
                attributeItem: {
                    type: Schema.Types.ObjectId,
                    ref: "Attribute",
                    required: true,
                },
                quantity: {
                    type: Number,
                    required: true,
                },
            },
        ],
    },
    { timestamps: true, versionKey: false }
);

export default mongoose.model("CartModels", cartSchema);
