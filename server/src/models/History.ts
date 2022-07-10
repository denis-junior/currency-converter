import { model, Schema } from "mongoose";

type ConversionType = {
  type: string;
  value: number;
};

interface IHistoryModel {
  user_id: string;
  current: ConversionType;
  to_now: ConversionType;
  created_at: Date;
}

const HistorySchema = new Schema({
  user_id: String,
  current: Object,
  to_now: Object,
  created_at: Date,
});

const HistoryModel = model<IHistoryModel>("Histories", HistorySchema);

export { HistoryModel };
