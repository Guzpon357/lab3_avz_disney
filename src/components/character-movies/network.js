import { Router } from "express";
import * as Controller from "./controller";

const MovieCharacterRouter = Router();

MovieCharacterRouter.route("/character-movie/").get(Controller.readAll);
MovieCharacterRouter.route("/character-movie/:id").get(Controller.readOne);
MovieCharacterRouter.route("/character-movie/").post(Controller.create);
MovieCharacterRouter.route("/character-movie/:id").delete(Controller.deleteOne);

export default MovieCharacterRouter;