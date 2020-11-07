import { IListEpisodesWebsiteRequest } from '../../services/IListEpisodesWebsiteRequest';

export class ListEpisodesUseCase {
  constructor(
    private listEpisodes: IListEpisodesWebsiteRequest
  ) {}
  
  async execute() {
    const episodes = await this.listEpisodes.request();

    return episodes;
  }
}