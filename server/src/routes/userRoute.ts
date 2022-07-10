import { Router } from "express";
import { getAllUsers, login, register } from "../controllers/user";

export function userRoute(router: Router): void {
  router.get("/user", getAllUsers);
  router.post("/user", register);
  router.post("/session", login);
}
