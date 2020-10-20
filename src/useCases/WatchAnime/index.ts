import { WatchAnimeController } from './WatchAnimeController';
import { WatchAnimeUseCase } from './WatchAnimeUseCase';
import { WatchAnimeWebsiteRequest } from '../../services/implementations/WatchAnimeWebsiteRequest';

const watchAnimeWebsiteRequest = new WatchAnimeWebsiteRequest;

export const watchAnimeUseCase = new WatchAnimeUseCase(
  watchAnimeWebsiteRequest
);

export const watchAnimeController = new WatchAnimeController(
  watchAnimeUseCase
);
