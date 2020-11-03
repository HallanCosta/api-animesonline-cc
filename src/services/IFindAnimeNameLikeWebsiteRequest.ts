type TAnime = {
  idAnime: string;
  image: string;
  rating: string;
}

export type TAnimesFinded = {
  search: string;
  animesFinded: TAnime[];
  totalPage: string;
}

export interface IFindAnimeNameLikeWebsiteRequest {
  request(name: string): Promise<TAnimesFinded>;
}