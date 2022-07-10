import { model, Schema } from "mongoose";

interface IUser {
  email: string;
  password: string;
}

const UserSchema = new Schema({
  email: String,
  password: String,
});

const User = model<IUser>("Users", UserSchema);

export { User };
