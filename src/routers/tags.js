import { Router } from "express";
import { createTags, deleteTags, getAllTags, getByIdTags, updateTags } from "../controllers/tags";

const routerTags = Router();

routerTags.get("/tags", getAllTags);
routerTags.get("/tags/:id", getByIdTags);
routerTags.post("/tags/add", createTags);
routerTags.put("/tags/edit/:id", updateTags);
routerTags.delete("/tags/delete/:id", deleteTags);

export default routerTags;

