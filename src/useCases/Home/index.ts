import { HomeUseCase } from './HomeUseCase';
import { HomeController } from './HomeController';
import { HomeAnimesWebsiteRequest } from '../../services/implementations/HomeAnimesWebsiteRequest';

const homeAnimesWebsiteRequest = new HomeAnimesWebsiteRequest;

const homeUseCase = new HomeUseCase(
  homeAnimesWebsiteRequest
);

const homeController = new HomeController(
  homeUseCase
);

export { homeUseCase, homeController };
