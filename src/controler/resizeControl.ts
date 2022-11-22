import { Request, Response } from "express";
import fs from "fs";
import sharp from "sharp";

export const resizeimg = async (
  imgname: unknown,
  width: number,
  height: number
) => {
  const imge = fs.readFileSync(`${process.cwd()}/images/${imgname}`);

  try {
    await sharp(imge)
      .resize({
        width: width,
        height: height,
      })
      .toFile(
        `${process.cwd()}/images/imgeAfteEdit/${width}_${height}${imgname}`
      );
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const resize = async (req: Request, res: Response) => {
  const imgname = req.query.imgname;
  const widthsize: number = parseInt(req.query.width as string);
  const hightsize: number = parseInt(req.query.height as string);
  if (
    fs.existsSync(
      `${process.cwd()}/imgeAfteEdit/${widthsize}_${hightsize}${imgname}`
    )
  ) {
    res.send(`<img src="imgeAfteEdit/${widthsize}_${hightsize}${imgname}"+ />`);
  } else {
    const resize = await resizeimg(imgname, widthsize, hightsize);
    if (resize) {
      res.send(
        `<img src="imgeAfteEdit/${widthsize}_${hightsize}${imgname}"+ />`
      );
    } else {
      res.send("img can't procces");
    }
  }
};
