
import { Router } from "express";
import * as Controller from "./controller";
import authentication from "../../middlewares/authentication.js";

const movieRouter = Router();

movieRouter.route("/movie/").get(authentication, Controller.readAll);
movieRouter.route("/movie/:id").get(authentication, Controller.readOne);
movieRouter.route("/movie/").post(authentication, Controller.create);
movieRouter.route("/movie/:id").put(authentication, Controller.update);
movieRouter.route("/movie/:id").delete(authentication, Controller.deleteOne);

export default movieRouter;