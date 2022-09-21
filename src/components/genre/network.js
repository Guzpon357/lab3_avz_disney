import { Router } from "express";
import * as Controller from "./controller";
import authentication from "../../middlewares/authentication.js";

const genreRouter = Router();

genreRouter.route("/genre/").get(authentication, Controller.readAll);
genreRouter.route("/genre/:id").get(authentication, Controller.readOne);
genreRouter.route("/genre/").post(authentication, Controller.create);
genreRouter.route("/genre/:id").put(authentication, Controller.update);
genreRouter.route("/genre/:id").delete(authentication, Controller.deleteOne);

export default genreRouter;