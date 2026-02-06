import mongoose from "mongoose";

const insightsSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Insights =
  mongoose.models.insights || mongoose.model("insight", insightsSchema);
