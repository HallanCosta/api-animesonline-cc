import { FindAnimeNameLikeController } from './FindAnimeNameLikeController';
import { FindAnimeNameLikeUseCase } from './FindAnimeNameLikeUseCase';
import { FindAnimeNameLike } from '../../services/implementations/FindAnimeNameLike';

const findAnimeNameLike = new FindAnimeNameLike;

export const findAnimeNameLikeUseCase = new FindAnimeNameLikeUseCase(
  findAnimeNameLike
);

export const findAnimeNameLikeController = new FindAnimeNameLikeController(
  findAnimeNameLikeUseCase
);