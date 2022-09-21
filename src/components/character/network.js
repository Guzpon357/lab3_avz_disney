import { Router } from "express";
import * as Controller from "./controller";
import authentication from "../../middlewares/authentication.js";

const characterRouter = Router();

characterRouter.get("/character/", authentication, Controller.readAll);
characterRouter.route("/character/:id").get(authentication, Controller.readOne);
characterRouter.route("/character/new/").post(authentication, Controller.create);
characterRouter.route("/character/:id").put(authentication, Controller.update);
characterRouter.route("/character/:id").delete(authentication, Controller.deleteOne);

export default characterRouter;