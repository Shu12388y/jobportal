import express, { Router } from "express";
import { AuthController } from "../controller/auth.controller.js";
import { protected_middlewares } from "../../../middlewares.js";

export const authRoute: Router = express.Router();

const authController = new AuthController();

authRoute.post("/signup", authController.sign_up);
authRoute.post("/signin", authController.sign_in);
authRoute.put("/profile", protected_middlewares, authController.manage_profile);
authRoute.get("/profile", protected_middlewares, authController.profile);
