import supertest from "supertest";
import app from "../index";
import { resizeimg } from "../controler/resizeControl";
const req = supertest(app);
describe("should be defined", () => {
  it("test endpint/api", async () => {
    const response = await req.get("/api");
    expect(response.text).toBe("imgname or params not found or null"); // test my endpint /api
  });
  it("test resize imge api", async () => {
    const response = await req.get(
      "/api?imgname=test.jpg&width=200&height=200"
    );
    expect(response.text).toBe('<img src="imgeAfteEdit/200_200test.jpg"+ />'); // test my endpint /api

    // expect(response)
  });
  it("tes resize img function", async () => {
    const img = "test.jpg";
    const width = 400;
    const heght = 400;
    const resizeiIMG = await resizeimg(img, width, heght);
    expect(resizeiIMG).toBe(true);
  });
});
