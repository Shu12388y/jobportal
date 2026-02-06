import { Router } from "express";
import { JobController } from "../controller/job.controller.js";
import { protected_middlewares } from "../../../middlewares.js";
export const jobRoute: Router = Router();


const jobController = new JobController()

jobRoute.post("/job", protected_middlewares, jobController.create_job);
jobRoute.get("/jobs", jobController.get_jobs);
jobRoute.get("/job/:id", protected_middlewares, jobController.get_job);
