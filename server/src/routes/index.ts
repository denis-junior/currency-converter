import { Router } from "express";
import { userRoute } from "./userRoute";
import { historyRoute } from "./historyRoute";
const router = Router();

export function routesModule() {
  userRoute(router);
  historyRoute(router);
  return router;
}
