import { AnimeDetailsUseCase } from './AnimeDetailsUseCase';
import { AnimeDetailsController } from './AnimeDetailsController';
import { AnimeDetails } from '../../services/implementations/AnimeDetails';

const animeDetails = new AnimeDetails;

export const animeDetailsUseCase = new AnimeDetailsUseCase(
  animeDetails
);

export const animeDetailsController = new AnimeDetailsController(
  animeDetailsUseCase
);