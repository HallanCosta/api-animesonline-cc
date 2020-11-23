import { HomeUseCase } from './HomeUseCase';
import { HomeController } from './HomeController';
import { Home } from '../../services/implementations/Home';

const home = new Home;

const homeUseCase = new HomeUseCase(
  home
);

const homeController = new HomeController(
  homeUseCase
);

export { homeUseCase, homeController };
