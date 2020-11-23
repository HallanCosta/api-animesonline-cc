import { ListAnimesUseCase } from './ListAnimesUseCase';
import { ListAnimesController } from './ListAnimesController';
import { ListAnimes } from '../../services/implementations/ListAnimes';

const listAnimes = new ListAnimes;

export const listAnimesUseCase = new ListAnimesUseCase(
  listAnimes
);

export const listAnimesController = new ListAnimesController(
  listAnimesUseCase
);