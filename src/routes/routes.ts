import express from "express";
import { resize } from "../controler/resizeControl";
import { validatequery, validatefile } from "../middleware/validates";
const routes = express.Router();

routes.get("/api", validatequery, validatefile, resize);

export default routes;
