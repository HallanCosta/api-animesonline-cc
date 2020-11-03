import { ListAnimesUseCase } from './ListAnimesUseCase';
import { ListAnimesController } from './ListAnimesController';
import { ListAnimesWebsiteRequest } from '../../services/implementations/ListAnimesWebsiteRequest';

const listAnimesWebsiteRequest = new ListAnimesWebsiteRequest;

export const listAnimesUseCase = new ListAnimesUseCase(
  listAnimesWebsiteRequest
);

export const listAnimesController = new ListAnimesController(
  listAnimesUseCase
);