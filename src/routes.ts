import express from 'express';

import { homeController } from './useCases/Home';
import { watchAnimeController } from './useCases/WatchAnime';

const routes = express.Router();

routes.get('/', (requst, response) => {
  return homeController.handle(requst, response);
});

routes.get('/episode/:idEpisode', (requst, response) => {
  return watchAnimeController.handle(requst, response);
});

export { routes };
