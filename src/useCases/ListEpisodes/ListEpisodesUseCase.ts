import { IListEpisodes } from '../../services/IListEpisodes';

export class ListEpisodesUseCase {
  constructor(
    private listEpisodes: IListEpisodes
  ) {}
  
  async execute() {
    const episodes = await this.listEpisodes.request();

    return episodes;
  }
}