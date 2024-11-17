import mongoose, { Schema } from "mongoose";
// const ValueAttributeSchema = new Schema(
//     {
//         name: {
//             type: String,
//             required: true,
//         },
//         price: {
//             type: Number,
//             required: true,
//         },
//         quantity: {
//             type: Number,
//             required: true,
//         },
//     },
//     { timestamps: false, versionKey: false }
// );
// export const ValueAttributeModel = mongoose.model("ValueAttribute", ValueAttributeSchema);

const AttributeSchema = new Schema(
    {
        color: {
            type: String
        },
        size: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Size'
        },
        price: {
            type: String,
            required: true,
            default: 0,
        },
        pricesale: {
            type: String,
        },
    },
    { timestamps: false, versionKey: false }
);
export default mongoose.model("Attribute", AttributeSchema);
