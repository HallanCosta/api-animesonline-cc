import { IWatchAnimeWebsiteRequest } from '../../services/IWatchAnimeWebsiteRequest';
import { WatchAnimeRequestDTO } from './WatchAnimeDTO';

export class WatchAnimeUseCase {
  constructor(
    private watchAnime: IWatchAnimeWebsiteRequest
  ) {}

  async execute(data: WatchAnimeRequestDTO) {
    await this.watchAnime.list(data.idEpisode);
  }
}