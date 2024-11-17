import mongoose, { Schema } from "mongoose";

const sizeSchema = new Schema(
    {
        name: {
            type: String
        }
    },
    { timestamps: true, versionKey: false }
);

export default mongoose.model('Size', sizeSchema);