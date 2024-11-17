import { StatusCodes } from "http-status-codes";
import Tags from "../models/tags";

export const getAllTags = async (req, res) => {
    try {
        const tags = await Tags.find({});
        if (tags.length === 0) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: "Không có tags nào!" });
        }
        return res.status(StatusCodes.OK).json(tags);
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
    }
};

export const getByIdTags = async (req, res) => {
    try {
        const tags = await Tags.findOne({ _id: req.params.id });
        if (tags.length === 0) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: "Không có tags nào!" });
        }
        return res.status(StatusCodes.OK).json(tags);
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
    }
};

export const createTags = async (req, res) => {
    try {
        const tags = await Tags.create(req.body);

        return res.status(StatusCodes.CREATED).json(tags);
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
    }
};

export const updateTags = async (req, res) => {
    try {
        const tags = await Tags.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
        return res.status(StatusCodes.OK).json(tags);
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}

export const deleteTags = async (req, res) => {
    try {
        const id = req.params.id;
        const tags = await Tags.findOneAndDelete({ _id: id });
        return res.status(StatusCodes.CREATED).json(tags);
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
    }
}