import { HomeRequestDTO } from './HomeDTO';
import { IHome } from '../../services/IHome';

export class HomeUseCase {
  constructor(
    private home: IHome
  ) {}

  async execute() {
    const animesRecents = await this.home.request();

    return animesRecents;
  }
}