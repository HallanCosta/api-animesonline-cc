import { TAnime } from '../common/utils/Animes/TAnimes';

type TListAnimesGenre = {
  title: string;
  listAnimesGenre: TAnime[],
  totalPage: string
}

export interface IListAnimesGenre {
  request(idGenre: string): Promise<TListAnimesGenre>;
}