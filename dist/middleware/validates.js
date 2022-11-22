"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateimg = exports.validatefile = exports.validatequery = void 0;
const fs = require("fs");
const validatequery = (req, res, next) => {
  const { imgname, width, height } = req.query;
  const widthnum = Number(width);
  const heightnum = Number(height);
  if (imgname == undefined || imgname == "") {
    res.send("imgname or params not found or null");
  } else if (Number.isNaN(widthnum) || widthnum <= 0) {
    res.send("params not found or null");
  } else if (Number.isNaN(heightnum) || heightnum <= 0) {
    res.send("parms not found or null");
  } else {
    next();
  }
};
exports.validatequery = validatequery;
const validatefile = (req, res, next) => {
  if (!fs.existsSync(`${process.cwd()}/imgeAfteEdit`)) {
    fs.mkdir(
      `${process.cwd()}/images/imgeAfteEdit`,
      { recursive: true },
      (err) => {
        return err;
      }
    );
    next();
  }
};
exports.validatefile = validatefile;
const validateimg = (req, res, next) => {
  const { imgname, width, height } = req.query;
  if (!fs.existsSync(`${process.cwd()}/images/${imgname}`)) {
    res.send("imge not found");
  } else {
    next();
  }
};
exports.validateimg = validateimg;
