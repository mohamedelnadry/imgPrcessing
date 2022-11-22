"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../index"));
const resizeControl_1 = require("../controler/resizeControl");
const req = (0, supertest_1.default)(index_1.default);
describe("should be defined", () => {
  it("test endpint/api", () =>
    __awaiter(void 0, void 0, void 0, function* () {
      const response = yield req.get("/api");
      expect(response.text).toBe("imgname or params not found or null"); // test my endpint /api
    }));
  it("test resize imge api", () =>
    __awaiter(void 0, void 0, void 0, function* () {
      const response = yield req.get(
        "/api?imgname=test.jpg&width=200&height=200"
      );
      expect(response.text).toBe('<img src="imgeAfteEdit/200_200test.jpg"+ />'); // test my endpint /api
      // expect(response)
    }));
  it("tes resize img function", () =>
    __awaiter(void 0, void 0, void 0, function* () {
      const img = "test.jpg";
      const width = 400;
      const heght = 400;
      const resizeiIMG = yield (0, resizeControl_1.resizeimg)(
        img,
        width,
        heght
      );
      expect(resizeiIMG).toBe(true);
    }));
});
