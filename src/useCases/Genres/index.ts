import { GenresController } from './GenresController';
import { GenresUseCase } from './GenresUseCase';
import { Genres } from '../../services/implementations/Genres';

const genres = new Genres;

export const genresUseCase = new GenresUseCase(
  genres
);

export const genresController = new GenresController(
  genresUseCase
);