"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatefile = exports.validatequery = void 0;
const fs = require("fs");
const validatequery = (req, res, next) => {
    const { imgname, width, height } = req.query;
    if (imgname == undefined || imgname == "") {
        res.send("imgname or params not found or null");
    }
    else if (width == undefined || width == "") {
        res.send("params not found or null");
    }
    else if (height == undefined || height == "") {
        res.send("parms not found or null");
    }
    else {
        next();
    }
};
exports.validatequery = validatequery;
const validatefile = (req, res, next) => {
    if (!fs.existsSync(`${process.cwd()}/imgeAfteEdit`)) {
        fs.mkdir(`${process.cwd()}/images/imgeAfteEdit`, { recursive: true }, (err) => {
            return err;
        });
        next();
    }
};
exports.validatefile = validatefile;
