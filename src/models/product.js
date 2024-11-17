import { types } from "joi";
import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        // slug: {
        //     type: String,
        //     unique: true,
        // },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
            required: true,
        },
        sale: {
            type: Number,
        },
        image: {
            type: Object,
        },
        imagemain: {
            type: Object,
        },
        tags: [
            { type: String }
        ],
        desc: {
            type: String,
        },
        checked: {
            type: Boolean,
            default: false,
        },
        attribute: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Attribute",
            },
        ],
    },
    { timestamps: true, versionKey: false }
);

productSchema.plugin(mongoosePaginate);
export default mongoose.model("Product", productSchema);
