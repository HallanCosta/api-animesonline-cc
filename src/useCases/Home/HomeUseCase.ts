import { HomeRequestDTO } from './HomeDTO';
import { IHomeWebsiteRequest } from '../../services/IHomeWebsiteRequest';

export class HomeUseCase {
  constructor(
    private home: IHomeWebsiteRequest
  ) {}

  async execute() {
    const animesRecents = await this.home.animesRecents();

    return animesRecents;
  }
}