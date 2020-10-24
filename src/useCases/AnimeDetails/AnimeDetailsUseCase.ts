import { IAnimeDetailsWebsiteRequest } from '../../services/IAnimeDetailsWebsiteRequest';
import { AnimeDetailsRequestDTO } from './AnimeDetailsDTO';

export class AnimeDetailsUseCase {
  constructor(
    private animeDetails: IAnimeDetailsWebsiteRequest
  ) {}

  async execute(data: AnimeDetailsRequestDTO) {
    const animeDetails = await this.animeDetails.request(data.idAnime);

    return animeDetails;
  }
}