import { Request, Response, NextFunction } from "express";
import fs from 'fs'
export const validatequery = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
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
export const validatefile = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!fs.existsSync(`${process.cwd()}/imgeAfteEdit`)) {
    fs.mkdirSync(
      `${process.cwd()}/images/imgeAfteEdit`,
      { recursive: true }
    );
    next();
  }
};
export const validateimg = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { imgname } = req.query;

  if (!fs.existsSync(`${process.cwd()}/images/${imgname}`)) {
    res.send("imge not found");
  } else {
    next();
  }
};
