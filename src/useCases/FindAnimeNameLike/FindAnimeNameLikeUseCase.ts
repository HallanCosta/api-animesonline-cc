import { FindAnimeNameLikeRequestDTO } from "./FindAnimeNameLikeDTO";
import { IFindAnimeNameLike  } from '../../services/IFindAnimeNameLike';

export class FindAnimeNameLikeUseCase {
  constructor(
    private findAnimeNameLike: IFindAnimeNameLike
  ) {}

  async execute(data: FindAnimeNameLikeRequestDTO) {
    const findAnimes = await this.findAnimeNameLike.request(data.name, data.currentPage);

    if (findAnimes.animesFinded[0]) {
      return findAnimes;
    } else {
      return { 
        search: findAnimes.search,
        animesFinded: "Nenhum resultado encontrado." 
      };
    }

  }
}