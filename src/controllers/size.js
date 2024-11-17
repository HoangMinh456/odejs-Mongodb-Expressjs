import { StatusCodes } from "http-status-codes";
import Size from "../models/size";

export const getAllSize = async (req, res) => {
    try {
        const size = await Size.find({});
        if (size.length === 0) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: "Không có danh mục nào!" });
        }
        return res.status(StatusCodes.OK).json(size);
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
    }
};

export const getSizeById = async (req, res) => {
    try {
        const size = await Size.findOne({ _id: req.params.id });
        if (size.length === 0) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: "Không có danh mục nào!" });
        }
        return res.status(StatusCodes.OK).json(size);
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
    }
};

export const createSize = async (req, res) => {
    try {
        const size = await Size.create(req.body);

        return res.status(StatusCodes.CREATED).json(size);
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
    }
};

export const updateSize = async (req, res) => {
    try {
        const size = await Size.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
        return res.status(StatusCodes.OK).json(size);
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
    }
}

export const deleteSize = async (req, res) => {
    try {
        const id = req.params.id
        const size = await Size.findOneAndDelete({ _id: id });
        return res.status(StatusCodes.OK).json(size);
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
    }
}