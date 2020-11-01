import { FindAnimeNameLikeController } from './FindAnimeNameLikeController';
import { FindAnimeNameLikeUseCase } from './FindAnimeNameLikeUseCase';
import { FindAnimeNameLikeWebsiteRequest } from '../../services/implementations/FindAnimeNameLikeWebsiteRequest';

const findAnimeNameLikeWebsiteRequest = new FindAnimeNameLikeWebsiteRequest;

export const findAnimeNameLikeUseCase = new FindAnimeNameLikeUseCase(
  findAnimeNameLikeWebsiteRequest
);

export const findAnimeNameLikeController = new FindAnimeNameLikeController(
  findAnimeNameLikeUseCase
);