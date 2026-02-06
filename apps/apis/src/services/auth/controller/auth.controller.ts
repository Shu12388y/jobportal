import { Auth } from "../models/auth.model.js";
import {
  hash_password,
  compare_password,
} from "../../../modules/hash.module.js";
import { Request, Response } from "express";
import { generate_JWT_Token } from "../../../modules/jwt.module.js";
import { Connection } from "../../../utils/db.js";

export class AuthController extends Connection {
  DBInstance: any;
  constructor() {
    super();
    this.DBInstance = this.DB_Connect;
  }

  public async sign_up(req: Request, res: Response) {
    try {
      await this.DBInstance();
      const info = await req.body;
      const { email, password, fullname } = info;
      const is_user_exists = await Auth.findOne({
        //    @ts-ignore
        email: email,
      });
      if (is_user_exists) {
        res.status(402).json({ message: "Account already exists" });
        return;
      }
      await Auth.create({
        email: email,
        password: await hash_password(password),
        name: fullname,
      });
      res.status(201).json({ message: "success" });
      return;
    } catch (error) {
      res.status(500).json({ message: String(error) });
      return;
    }
  }

  public async sign_in(req: Request, res: Response) {
    try {
      await this.DBInstance();
      const info = await req.body;
      const { email, password } = info;
      if (!email || !password) {
        res.status(402).json({ message: "Email and password is required" });
        return;
      }

      const is_user_exists = await Auth.findOne({
        // @ts-ignore
        email: email,
      });
      if (!is_user_exists) {
        res.status(404).json({ message: "Account not exists" });
        return;
      }
      const is_password_correct = await compare_password(
        password,
        is_user_exists.password,
      );
      if (!is_password_correct) {
        res.status(402).json({ message: "Invalid Password" });
        return;
      }
      const user_info = {
        _id: is_user_exists._id,
      };
      const token = await generate_JWT_Token(user_info);
      res.status(200).json({ message: "success", token: token });
      return;
    } catch (error) {
      res.status(500).json({ message: String(error) });
      return;
    }
  }

  public async manage_profile(req: Request, res: Response) {
    try {
      await this.DBInstance();
      // @ts-ignore
      const info = await req.user;
      const { walletAddress, bio, socialLinks } = req.body;
      // @ts-ignore
      const is_user_exists = await Auth.findById(info._id);
      if (!is_user_exists) {
        res.status(404).json({ message: "Account not exists" });
        return;
      }
      //   @ts-ignore
      await Auth.findByIdAndUpdate(info._id, {
        walletAddress,
        bio,
        socialLinks,
      });
    } catch (error) {
      res.status(500).json({ message: String(error) });
      return;
    }
  }

  public async profile(req: Request, res: Response) {
    try {
      await this.DBInstance();
      // @ts-ignore
      const info = await req.user;
      if (!info) {
        res.status(402).json({ message: "Something went wrong" });
        return;
      }
      // @ts-ignore
      const profile_info = await Auth.findById(info._id);
      if (!profile_info) {
        res.status(402).json({ message: "Something went wrong" });
      }
      res.status(200).json({ message: "success", data: profile_info });
      return;
    } catch (error) {
      res.status(500).json({ message: String(error) });
      return;
    }
  }
}
