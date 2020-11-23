import { IListEpisodes } from '../../services/IListEpisodes';
import { ListEpisodesRequestDTO } from './ListEpisodesDTO';

export class ListEpisodesUseCase {
  constructor(
    private listEpisodes: IListEpisodes
  ) {}
  
  async execute(data: ListEpisodesRequestDTO) {
    const episodes = await this.listEpisodes.request(data.currentPage);

    return episodes;
  }
}