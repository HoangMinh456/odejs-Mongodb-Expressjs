import { Router } from "express";
import { createSize, deleteSize, getAllSize, getSizeById, updateSize } from "../controllers/size";

const sizeRouter = Router();

sizeRouter.get("/size", getAllSize);
sizeRouter.get("/size/:id", getSizeById);
sizeRouter.post("/size/add", createSize);
sizeRouter.put("/size/:id", updateSize);
sizeRouter.delete("/size/:id", deleteSize);

export default sizeRouter;
