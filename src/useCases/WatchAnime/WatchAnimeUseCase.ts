import { IWatchAnime } from '../../services/IWatchAnime';
import { WatchAnimeRequestDTO } from './WatchAnimeDTO';

export class WatchAnimeUseCase {
  constructor(
    private watchAnime: IWatchAnime
  ) {}

  async execute(data: WatchAnimeRequestDTO) {
    const episode = await this.watchAnime.request(data.idEpisode);
    
    return episode;
  }
}