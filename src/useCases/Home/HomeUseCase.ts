import { HomeRequestDTO } from './HomeDTO';
import { IHomeWebsiteRequest } from '../../services/IHomeWebsiteRequest';

export class HomeUseCase {
  constructor(
    private home: IHomeWebsiteRequest
  ) {}

  async execute() {
    await this.home.animesRecents();
  }
}