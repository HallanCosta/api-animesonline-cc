import { TAnime } from '../common/utils/Animes/TAnimes';

export type TAnimesFinded = {
  search: string;
  animesFinded: TAnime[];
  totalPage: string;
}

export interface IFindAnimeNameLike {
  request(name: string): Promise<TAnimesFinded>;
}