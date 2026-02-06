import mongoose from "mongoose";
import { ENV } from "./env.js";

export class Connection {
  public async DB_Connect() {
    try {
      await mongoose.connect(ENV.DB!);
    } catch (error) {
      throw new Error(String(error));
    }
  }
}
