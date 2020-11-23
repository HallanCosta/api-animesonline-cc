import { WatchAnimeController } from './WatchAnimeController';
import { WatchAnimeUseCase } from './WatchAnimeUseCase';
import { WatchAnime } from '../../services/implementations/WatchAnime';

const watchAnime = new WatchAnime;

export const watchAnimeUseCase = new WatchAnimeUseCase(
  watchAnime
);

export const watchAnimeController = new WatchAnimeController(
  watchAnimeUseCase
);
