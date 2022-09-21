import { AuthRouter, GenreRouter, MovieRouter, TestRouter, CharacterRouter } from "../components";
import MovieCharacter from "../components/character-movies/network";
const listRoutes = [["/test", TestRouter],["/auth",AuthRouter],["/characters", CharacterRouter],
["/genres", GenreRouter],["/movies", MovieRouter], ["/characterOnMovies",MovieCharacter]];

export const routes = (app) => {
  listRoutes.forEach(([path, controller]) => {
    app.use(path, controller);
  });
};