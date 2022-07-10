import { Router } from "express";
import {
  getAllHistories,
  addHistory,
  getAllEspecificHistories,
} from "../controllers/history";
import authMiddleware from "../middleware/authMiddleware";

export function historyRoute(router: Router): void {
  router.get("/history", authMiddleware, getAllHistories);
  router.get("/history/one", authMiddleware, getAllEspecificHistories);
  router.post("/history", authMiddleware, addHistory);
}
