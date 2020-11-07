import { IListAnimesGenreWebsiteRequest } from '../../services/IListAnimesGenreWebsiteRequest';
import { ListAnimesGenreRequestDTO } from './ListAnimesGenreDTO';

export class ListAnimesGenreUseCase {
  constructor(
    private listAnimesGenre: IListAnimesGenreWebsiteRequest
  ) {}

  async execute(data: ListAnimesGenreRequestDTO) {
    const animesGenre = await this.listAnimesGenre.request(data.idGenre);

    return animesGenre;
  }
}