import { TAnime } from '../common/utils/Animes/TAnimes';

type TListAnimes = {
  listAnimes: TAnime[];
  totalPage: string;
}

export interface IListAnimes {
  request(): Promise<TListAnimes>;
}