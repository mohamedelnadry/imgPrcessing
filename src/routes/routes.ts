import express from "express";
import { resize } from "../controler/resizeControl";
import {
  validatequery,
  validatefile,
  validateimg,
} from "../middleware/validates";
const routes = express.Router();

routes.get("/api", validatequery, validatefile, validateimg, resize);

export default routes;
