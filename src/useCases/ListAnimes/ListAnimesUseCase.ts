import { IListAnimesWebsiteRequest } from '../../services/IListAnimesWebsiteRequest';

export class ListAnimesUseCase {
  constructor(
   private listAnimes: IListAnimesWebsiteRequest 
  ) {}

  async execute() {
    const animes = await this.listAnimes.request();

    return animes;
  }
}