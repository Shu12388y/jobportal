import { Jobs } from "../model/jobs.model.js";
import { Auth } from "../../auth/models/auth.model.js";
import { Request, Response } from "express";
import { Connection } from "../../../utils/db.js";

export class JobController extends Connection {
  DBInstance: any;
  constructor() {
    super();
    this.DBInstance = this.DB_Connect;
  }

  public async create_job(req: Request, res: Response) {
    try {
      await this.DBInstance();

      // @ts-ignore
      const info = await req.user;
      // @ts-ignore
      const is_user_exists = await Auth.findById(info._id);
      if (!is_user_exists) {
        res.status(404).json({ message: "Account not exists" });
        return;
      }
      const jobinfo = await req.body;
      const { title, company, location, type, salary, skills, description } =
        jobinfo;
      await Jobs.create({
        user: info._id,
        title,
        company,
        location,
        type,
        salary,
        skills,
        description,
      });
      res.status(201).json({ message: "success" });
      return;
    } catch (error) {
      res.status(500).json({ message: String(error) });
      return;
    }
  }

  public async get_jobs(_: Request, res: Response) {
    try {
      await this.DBInstance();

      const info = await Jobs.find().sort({
        createdAt: -1,
      });
      res.status(200).json({ message: "success", data: info });
      return;
    } catch (error) {
      res.status(500).json({ message: String(error) });
      return;
    }
  }

  public async get_job(req: Request, res: Response) {
    try {
     await this.DBInstance();
      const id = req.params;
      // @ts-ignore
      const info = await Jobs.findById(id);
      if (!info) {
        res.status(404).json({ message: "Not Found" });
        return;
      }
      res.status(200).json({ message: "success", data: info });
    } catch (error) {
      res.status(500).json({ message: String(error) });
      return;
    }
  }
}
