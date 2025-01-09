import { Schema, model } from "mongoose";
import { UserInterface } from "../interface/user.interface";
const UserSchema = new Schema({

  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  is_deleted: {
    type: String,
    enum: [0, 1],
    default: 0,
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const UserModel = model<UserInterface>("user", UserSchema);
export default UserModel;
