const request = require("supertest");
const app = require("../src/server");

describe("Express API Tests", () => {
  test("GET / should return API running message", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
      message: "Express API is running on Vercel 🚀"
    });
  });

  test("GET /api/health should return status ok", async () => {
    const response = await request(app).get("/api/health");

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
      status: "ok"
    });
  });
});