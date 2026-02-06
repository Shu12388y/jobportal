import { Router } from "express";
import { protected_middlewares } from "../../../middlewares.js";
import { InsightController } from "../controller/insight.controller.js";

export const insightRoute:Router = Router();

const insightController = new InsightController();

insightRoute.post("/insight",protected_middlewares,insightController.create_insight);
insightRoute.get("/insights",insightController.get_insights);