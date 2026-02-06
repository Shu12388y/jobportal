import mongoose from "mongoose";

const authSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
    },
    socialLinks: {
      type: String,
    },
    walletAddress: {
      type: String,
    },
  },
  { timestamps: true },
);


export const Auth = mongoose.models.auth || mongoose.model("auth",authSchema);