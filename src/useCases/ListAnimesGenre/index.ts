import { ListAnimesGenreController } from './ListAnimesGenreController';
import { ListAnimesGenreUseCase } from './ListAnimesGenreUseCase';
import { ListAnimesGenre } from '../../services/implementations/ListAnimesGenre';

const listAnimesGenre = new ListAnimesGenre;

export const listAnimesGenreUseCase = new ListAnimesGenreUseCase(
  listAnimesGenre
);

export const listAnimesGenreController = new ListAnimesGenreController(
  listAnimesGenreUseCase
);
