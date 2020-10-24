import { AnimeDetailsUseCase } from './AnimeDetailsUseCase';
import { AnimeDetailsController } from './AnimeDetailsController';
import { AnimeDetailsWebsiteRequest } from '../../services/implementations/AnimeDetailsWebsiteRequest';

const animeDetailsWebsiteRequest = new AnimeDetailsWebsiteRequest;

export const animeDetailsUseCase = new AnimeDetailsUseCase(
  animeDetailsWebsiteRequest
);

export const animeDetailsController = new AnimeDetailsController(
  animeDetailsUseCase
);