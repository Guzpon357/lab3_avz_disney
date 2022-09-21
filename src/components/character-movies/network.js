import { Router } from "express";
import * as Controller from "./controller";

const MovieCharacterRouter = Router();

MovieCharacterRouter.route("/").get(Controller.readAll);
MovieCharacterRouter.route("/:id").get(Controller.readOne);
MovieCharacterRouter.route("/").post(Controller.create);
MovieCharacterRouter.route("/:id").delete(Controller.deleteOne);

export default MovieCharacterRouter;