import { Request, Response } from "express";
import fs from "fs";
import sharp from "sharp";

export const resize = async (req: Request, res: Response) => {
  const imgname = req.query.imgname;
  const widthsize: number = parseInt(req.query.width as string);
  const hightsize: number = parseInt(req.query.height as string);
  const imge = fs.readFileSync(`${process.cwd()}/images/${imgname}`);
  if (
    fs.existsSync(
      `${process.cwd()}/imgeAfteEdit/${widthsize}_${hightsize}${imgname}`
    )
  ) {
    res.send(`<img src="imgeAfteEdit/${widthsize}_${hightsize}${imgname}"+ />`);
  } else {
    try {
      await sharp(imge)
        .resize({
          width: widthsize,
          height: hightsize,
        })
        .toFile(
          `${process.cwd()}/images/imgeAfteEdit/${widthsize}_${hightsize}${imgname}`
        );
    } catch (error) {
      console.log(error);
    }
    res.send(`<img src="imgeAfteEdit/${widthsize}_${hightsize}${imgname}"+ />`);
  }
};
