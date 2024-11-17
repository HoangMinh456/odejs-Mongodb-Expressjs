import mongoose, { Schema } from "mongoose";

const tagsSchema = new Schema(
    {
        name: {
            type: String
        }
    },
    { timestamps: true, versionKey: false }
);

export default mongoose.model('Tags', tagsSchema);