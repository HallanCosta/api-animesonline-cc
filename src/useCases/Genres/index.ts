import { GenresController } from './GenresController';
import { GenresUseCase } from './GenresUseCase';
import { GenresWebsiteRequest } from '../../services/implementations/GenresWebsiteRequest';

const genresWebsiteRequest = new GenresWebsiteRequest;

export const genresUseCase = new GenresUseCase(
  genresWebsiteRequest
);

export const genresController = new GenresController(
  genresUseCase
);