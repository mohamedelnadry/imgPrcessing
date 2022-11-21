import supertest from "supertest";
import app from "../index";
const req = supertest(app);
describe("should be defined", () => {
  it("test endpint/api", async () => {
    const response = await req.get("/api");
    expect(response.text).toBe("imgname or params not found or null"); // test my endpint /api
  });
  it("test resize imge", async () => {
    const response = await req.get(
      "/api?imgname=test.jpg&width=200&height=200"
    );
    expect(response.text).toBe('<img src="imgeAfteEdit/200_200test.jpg"+ />'); // test my endpint /api

    // expect(response)
  });
});
