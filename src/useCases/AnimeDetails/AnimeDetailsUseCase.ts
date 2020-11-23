import { IAnimeDetails } from '../../services/IAnimeDetails';
import { AnimeDetailsRequestDTO } from './AnimeDetailsDTO';

export class AnimeDetailsUseCase {
  constructor(
    private animeDetails: IAnimeDetails
  ) {}

  async execute(data: AnimeDetailsRequestDTO) {
    const animeDetails = await this.animeDetails.request(data.idAnime);

    return animeDetails;
  }
}