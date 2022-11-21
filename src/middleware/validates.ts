import { Request, Response, NextFunction } from "express";
const fs = require("fs");
export const validatequery = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { imgname, width, height } = req.query;
  if (imgname == undefined || imgname == "") {
    res.send("imgname or params not found or null");
  } else if (width == undefined || width == "") {
    res.send("params not found or null");
  } else if (height == undefined || height == "") {
    res.send("parms not found or null");
  } else {
    next();
  }
};
export const validatefile = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!fs.existsSync(`${process.cwd()}/imgeAfteEdit`)) {
    fs.mkdir(
      `${process.cwd()}/images/imgeAfteEdit`,
      { recursive: true },
      (err: Error) => {
        return err;
      }
    );
    next();
  }
};
