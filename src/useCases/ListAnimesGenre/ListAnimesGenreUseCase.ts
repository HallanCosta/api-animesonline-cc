import { IListAnimesGenre } from '../../services/IListAnimesGenre';
import { ListAnimesGenreRequestDTO } from './ListAnimesGenreDTO';

export class ListAnimesGenreUseCase {
  constructor(
    private listAnimesGenre: IListAnimesGenre
  ) {}

  async execute(data: ListAnimesGenreRequestDTO) {
    const animesGenre = await this.listAnimesGenre.request(data.idGenre);

    return animesGenre;
  }
}