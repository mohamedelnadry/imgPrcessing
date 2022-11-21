"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resize = void 0;
const fs_1 = __importDefault(require("fs"));
const sharp_1 = __importDefault(require("sharp"));
const resize = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const imgname = req.query.imgname;
    const widthsize = parseInt(req.query.width);
    const hightsize = parseInt(req.query.height);
    const imge = fs_1.default.readFileSync(`${process.cwd()}/images/${imgname}`);
    if (fs_1.default.existsSync(`${process.cwd()}/imgeAfteEdit/${widthsize}_${hightsize}${imgname}`)) {
        res.send(`<img src="imgeAfteEdit/${widthsize}_${hightsize}${imgname}"+ />`);
    }
    else {
        try {
            yield (0, sharp_1.default)(imge)
                .resize({
                width: widthsize,
                height: hightsize,
            })
                .toFile(`${process.cwd()}/images/imgeAfteEdit/${widthsize}_${hightsize}${imgname}`);
        }
        catch (error) {
            console.log(error);
        }
        res.send(`<img src="imgeAfteEdit/${widthsize}_${hightsize}${imgname}"+ />`);
    }
});
exports.resize = resize;
