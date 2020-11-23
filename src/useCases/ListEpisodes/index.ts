import { ListEpisodesController } from './ListEpisodesController';
import { ListEpisodesUseCase } from './ListEpisodesUseCase';
import { ListEpisodes } from '../../services/implementations/ListEpisodes';

const listEpisodes = new ListEpisodes;

export const listEpisodesUseCase = new ListEpisodesUseCase(
  listEpisodes
);

export const listEpisodesController = new ListEpisodesController(
  listEpisodesUseCase
);
 
