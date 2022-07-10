import { Router } from "express";
import request from "supertest";
import { app } from "../index";
// import { getAllUsers } from "../controllers/user";

// const router = Router();

describe("Actions in User", () => {


  // it("should be able to register a new user in DB", async () => {
  //   const response = await request(app).post("/user").send({
  //     email: "userTest@example.com",
  //     password: "password",
  //     confirmpassword: "password"
  //   });
  //   expect(response.status).toBe(201);
  // });

  it("should be able to get all users in DB", async () => {
    const response = await request(app).get("/user");
    expect(response.status).toBe(200);
  });

  it("should be able to login an user", async () => {
    const response = await request(app).post("/session").send({
      email: "denis@gmail.com",
      password: "senha",
    });
    expect(response.body).toHaveProperty("person");
  });

  it("shouldn't be able to login an user with wrong password", async () => {
    const response = await request(app).post("/session").send({
      email: "denis@gmail.com",
      password: "senhaa",
    });
    expect(response.status).toBe(500);
  });

});
