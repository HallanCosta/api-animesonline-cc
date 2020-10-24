import express from 'express';

import { homeController } from './useCases/Home';
import { watchAnimeController } from './useCases/WatchAnime';
import { animeDetailsController } from './useCases/AnimeDetails';

const routes = express.Router();

routes.get('/', (requst, response) => {
  return homeController.handle(requst, response);
});

routes.get('/episode/:idEpisode', (requst, response) => {
  return watchAnimeController.handle(requst, response);
});

routes.get('/anime/:idAnime', (requst, response) => {
  return animeDetailsController.handle(requst, response);
});

export { routes };
