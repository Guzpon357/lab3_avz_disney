import { Router } from "express";
import * as Controller from "./controller";

const characterOnMovieRouter = Router();

characterOnMovieRouter.route("/character-movie/").get(Controller.readAll);
characterOnMovieRouter.route("/character-movie/:id").get(Controller.readOne);
characterOnMovieRouter.route("/character-movie/").post(Controller.create);
characterOnMovieRouter.route("/character-movie/:id").delete(Controller.deleteOne);

export default characterOnMovieRouter;