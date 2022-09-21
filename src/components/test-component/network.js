import { Router } from "express";
import * as Controller from "./controller";

const TestRouter = Router();

TestRouter.route("/").get(Controller.findAll);
TestRouter.route("/").post(Controller.create);

export default TestRouter;
