import { StatusCodes } from "http-status-codes";
import Attribute from "../models/attribute";
import Product from "../models/product";
// Controller để tạo mới một thuộc tính
export const createAttribute = async (req, res) => {
    try {
        const attribute = await Attribute.create(req.body)
        res.status(201).json(attribute._id);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Controller để lấy tất cả các thuộc tính
export const getAllAttributes = async (req, res) => {
    try {
        const attributes = await Attribute.find();
        res.json(attributes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller để lấy một thuộc tính theo ID
export const getAttributeById = async (req, res) => {
    try {
        const attribute = await Attribute.findById(req.params.id).populate('size');
        if (!attribute) {
            return res.status(404).json({ message: "Attribute not found" });
        }
        res.json(attribute);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller để lấy một thuộc tính theo ID prduct
export const getAttributeByIdPro = async (req, res) => {
    try {
        const attribute = await Product.findById(req.params.id).populate({
            path: 'attribute',
            populate: {
                path: 'size',
                model: 'Size'
            }
        });
        if (!attribute) {
            return res.status(404).json({ message: "Attribute not found" });
        }
        res.json(attribute.attribute);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller để cập nhật một thuộc tính
export const updateAttribute = async (req, res) => {
    try {
        const attribute = await Attribute.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
        if (!attribute) {
            return res.status(404).json({ message: "Attribute not found" });
        }

        return res.status(StatusCodes.OK).json(attribute);
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
};

// Controller để xóa một thuộc tính
export const deleteAttribute = async (req, res) => {
    try {
        const attribute = await Attribute.findById(req.params.id);
        if (!attribute) {
            return res.status(404).json({ message: "Attribute not found" });
        }
        await Attribute.deleteOne({ _id: req.params.id });
        res.json({ message: "Attribute deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//==================================== VALUE ============================================

// Controller để tạo mới một giá trị của thuộc tính
export const createValueAttribute = async (req, res) => {
    try {
        const attribute = await Attribute.create(req.body);
        res.status(201).json(newValueAttribute);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Controller để lấy tất cả các giá trị của thuộc tính
export const getAllValueAttributes = async (req, res) => {
    try {
        const values = await ValueAttributeModel.find();
        res.json(values);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller để lấy một giá trị của thuộc tính theo ID
export const getValueAttributeById = async (req, res) => {
    try {
        const value = await ValueAttributeModel.findById(req.params.id);
        if (!value) {
            return res.status(404).json({ message: "ValueAttribute not found" });
        }
        res.json(value);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller để cập nhật một giá trị của thuộc tính
export const updateValueAttribute = async (req, res) => {
    try {
        const { name, price, quantity } = req.body;
        const value = await ValueAttributeModel.findById(req.params.id);
        if (!value) {
            return res.status(404).json({ message: "ValueAttribute not found" });
        }
        value.name = name;
        value.price = price;
        value.quantity = quantity;
        const updatedValue = await value.save();
        res.json(updatedValue);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Controller để xóa một giá trị của thuộc tính
export const deleteValueAttribute = async (req, res) => {
    try {
        const value = await ValueAttributeModel.findById(req.params.id);
        if (!value) {
            return res.status(404).json({ message: "ValueAttribute not found" });
        }
        await value.remove();
        res.json({ message: "ValueAttribute deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
