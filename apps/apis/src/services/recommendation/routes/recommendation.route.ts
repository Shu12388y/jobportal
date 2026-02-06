import { Router } from "express";
import { protected_middlewares } from "../../../middlewares.js";
import { RecommendationController } from "../controller/recommendation.controller.js";

export const recommendationRoute: Router = Router();

const recommandationController = new RecommendationController()

recommendationRoute.get(
  "/recommend",
  protected_middlewares,
  recommandationController.recommendation,
);
