import { IListEpisodesAnimesWebsiteRequest } from '../../services/IListEpisodesAnimesWebsiteRequest';
import { ListEpisodesAnimeRequestDTO } from './ListEpisodesAnimeDTO';

export class ListEpisodesAnimeUseCase {
  constructor(
    private listEpisodesAnimesWebsiteRequest: IListEpisodesAnimesWebsiteRequest
  ) {}

  async execute() {
    await this.listEpisodesAnimesWebsiteRequest.request();
  }
}