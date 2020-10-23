import { IWatchAnimeWebsiteRequest } from '../../services/IWatchAnimeWebsiteRequest';
import { WatchAnimeRequestDTO } from './WatchAnimeDTO';

export class WatchAnimeUseCase {
  constructor(
    private watchAnimeWebsiteRequest: IWatchAnimeWebsiteRequest
  ) {}

  async execute(data: WatchAnimeRequestDTO) {
    const episode = await this.watchAnimeWebsiteRequest.request(data.idEpisode);
    
    return episode;
  }
}