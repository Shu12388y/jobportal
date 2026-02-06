import { Response, Request, NextFunction } from "express";
import { verify_jwt_token } from "./modules/jwt.module.js";

export const protected_middlewares = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const token = req.headers["authorization"];
    if (!token) {
      res.status(402).json({ message: "Unauthorized" });
      return;
    }
    const info = await verify_jwt_token(token);
    if (!info) {
      res.status(402).json({ message: "Unauthorized" });
      return;
    }
    // @ts-ignore
    req.user = info;
    next();
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
