import { ListEpisodesController } from './ListEpisodesController';
import { ListEpisodesUseCase } from './ListEpisodesUseCase';
import { ListEpisodesWebsiteRequest } from '../../services/implementations/ListEpisodesWebsiteRequest';

const listEpisodesWebsiteRequest = new ListEpisodesWebsiteRequest;

export const listEpisodesUseCase = new ListEpisodesUseCase(
  listEpisodesWebsiteRequest
);

export const listEpisodesController = new ListEpisodesController(
  listEpisodesUseCase
);
 
