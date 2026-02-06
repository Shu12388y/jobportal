import express, { Express } from "express";
import {authRoute} from "./services/auth/routes/auth.route.js"
import {jobRoute} from "./services/job-listing/routes/jobs.route.js"
import { insightRoute } from "./services/insights/routes/insight.route.js";
import { recommendationRoute } from "./services/recommendation/routes/recommendation.route.js";

export const app: Express = express();

app.get("/health", (_, res) => {
  res.status(200).jsonp({
    message: "healthy",
  });
});

app.use("/v1/auth",authRoute);
app.use("/v1/listing",jobRoute);
app.use("/v1/feed",insightRoute);
app.use("/v1/recommendation",recommendationRoute);