import { ListAnimesGenreController } from './ListAnimesGenreController';
import { ListAnimesGenreUseCase } from './ListAnimesGenreUseCase';
import { ListAnimesGenreWebsiteRequest } from '../../services/implementations/ListAnimesGenreWebsiteRequest';

const listAnimesGenreWebsiteRequest = new ListAnimesGenreWebsiteRequest;

export const listAnimesGenreUseCase = new ListAnimesGenreUseCase(
  listAnimesGenreWebsiteRequest
);

export const listAnimesGenreController = new ListAnimesGenreController(
  listAnimesGenreUseCase
);
