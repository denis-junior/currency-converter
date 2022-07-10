import { Request, Response, NextFunction } from "express";
import { HistoryModel } from "../models/History";
import { User } from "../models/User";

const getAllHistories = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const histories = await HistoryModel.find(); //method for get all data
    return res.status(200).json(histories);
  } catch (err) {
    return res.status(500).json({ error: err });
  }
};

const getAllEspecificHistories = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let userId = req.headers.user;

    const histories = await HistoryModel.find({ user_id: userId }); //method for get an especific data
    return res.status(200).json({ histories });
  } catch (err) {
    return res.status(500).json({ error: err });
  }
};

const addHistory = async (req: Request, res: Response, next: NextFunction) => {
  const { current, to_now } = req.body;
  const sub = req.headers.user;

  try {
    await HistoryModel.create({
      user_id: sub,
      current,
      to_now,
      created_at: new Date(),
    }); //creating data

    res.status(201).json({ message: "History added!" }); //everything it's working (for now)
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export { getAllHistories, addHistory, getAllEspecificHistories };
