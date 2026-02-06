import { Auth } from "../../../services/auth/models/auth.model.js";
import { Jobs } from "../../../services/job-listing/model/jobs.model.js";
import { Request, Response } from "express";
import { Connection } from "../../../utils/db.js";

export class RecommendationController extends Connection {
  DBInstance: any;
  constructor() {
    super();
    this.DBInstance = this.DB_Connect;
  }

  public async recommendation(req: Request, res: Response) {
    try {
      await this.DBInstance();
      // @ts-ignore
      const userid = req.user;
    } catch (error) {
      res.status(500).json({ message: String(error) });
      return;
    }
  }
}
