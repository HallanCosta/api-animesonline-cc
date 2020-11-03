import express from 'express';

import { homeController } from './useCases/Home';
import { watchAnimeController } from './useCases/WatchAnime';
import { animeDetailsController } from './useCases/AnimeDetails';
import { findAnimeNameLikeController } from './useCases/FindAnimeNameLike';
import { listAnimesController } from './useCases/ListAnimes';

const routes = express.Router();

routes.get('/', (request, response) => {
  return homeController.handle(request, response);
});

routes.get('/episode/:idEpisode', (request, response) => {
  return watchAnimeController.handle(request, response);
});

routes.get('/anime/:idAnime', (request, response) => {
  return animeDetailsController.handle(request, response);
});

routes.get('/search/:name', (request, response) => {
  return findAnimeNameLikeController.handle(request, response);
});

routes.get('/anime/', (request, response) => {
  return listAnimesController.handle(request, response);
});


export { routes };
