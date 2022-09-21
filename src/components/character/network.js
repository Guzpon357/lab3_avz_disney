import { Router } from "express";
import * as Controller from "./controller";
import authentication from "../../middlewares/authentication.js";

const characterRouter = Router();

characterRouter.get("/character/", authentication, Controller.readAll);
characterRouter.route("/character/:id").get(authentication, Controller.readOne);
//characterRouter.route("/character/?name=name").get(authentication, Controller.searchByName);
//characterRouter.route("/character/?age=age").get(authentication, Controller.searchByAge);
//characterRouter.route("/character/?movie=movie").get(authentication, Controller.searchByMovie);
characterRouter.route("/character/new/").post(authentication, Controller.create);
characterRouter.route("/character/:id").put(authentication, Controller.update);
characterRouter.route("/character/:id").delete(authentication, Controller.deleteOne);

export default characterRouter;