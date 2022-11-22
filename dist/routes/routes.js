"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const resizeControl_1 = require("../controler/resizeControl");
const validates_1 = require("../middleware/validates");
const routes = express_1.default.Router();
routes.get(
  "/api",
  validates_1.validatequery,
  validates_1.validatefile,
  validates_1.validateimg,
  resizeControl_1.resize
);
exports.default = routes;
