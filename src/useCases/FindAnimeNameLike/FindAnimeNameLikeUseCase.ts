import { FindAnimeNameLikeRequestDTO } from "./FindAnimeNameLikeDTO";
import { IFindAnimeNameLikeWebsiteRequest  } from '../../services/IFindAnimeNameLikeWebsiteRequest';

export class FindAnimeNameLikeUseCase {
  constructor(
    private findAnimeNameLikeWebsiteRequest: IFindAnimeNameLikeWebsiteRequest
  ) {}

  async execute(data: FindAnimeNameLikeRequestDTO) {
    const findAnimes = await this.findAnimeNameLikeWebsiteRequest.request(data.name);

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