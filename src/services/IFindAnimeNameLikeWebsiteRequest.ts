import { TAnime } from '../common/utils/TAnimes';

export type TAnimesFinded = {
  search: string;
  animesFinded: TAnime[];
  totalPage: string;
}

export interface IFindAnimeNameLikeWebsiteRequest {
  request(name: string): Promise<TAnimesFinded>;
}