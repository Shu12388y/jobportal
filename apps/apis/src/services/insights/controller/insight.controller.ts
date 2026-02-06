import { Auth } from "../../../services/auth/models/auth.model.js";
import { Insights } from "../model/insights.model.js";
import { Request, Response } from "express";
import { Connection } from "../../../utils/db.js";

export class InsightController extends Connection {
  DBInstance: any;
  constructor() {
    super();
    this.DBInstance = this.DB_Connect;
  }

  public async create_insight(req: Request, res: Response) {
    try {
      await this.DBInstance();
      // @ts-ignore
      const info = req.user;
      const { content } = req.body;
      // @ts-ignore
      const is_user_exists = await Auth.findById(info._id);
      if (!is_user_exists) {
        res.status(404).json({ message: "Account not exists" });
        return;
      }

      await Insights.create({
        user: info._id,
        content,
      });
      res.status(201).json({ message: "success" });
      return;
    } catch (error) {
      res.status(500).json({ message: String(error) });
      return;
    }
  }

  public async get_insights(req: Request, res: Response) {
    try {
      await this.DBInstance();
      const info = await Insights.find().sort({
        createdAt: -1,
      });

      if (!info) {
        res.status(404).json({ message: "No Insights" });
        return;
      }
      res.status(200).json({ message: "sucess", data: info });
      return;
    } catch (error) {
      res.status(500).json({ message: String(error) });
      return;
    }
  }
}
