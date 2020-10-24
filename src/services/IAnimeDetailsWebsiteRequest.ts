type TGenres = {
  idGenre: string,
  genre: string
}

export type TAnimeDetails = {
  name: string,
  image: string,
  rating: string,
  genres: TGenres[],
  synopsis: string,
  titleListEpisodes: string
}

export interface IAnimeDetailsWebsiteRequest {
  request(idAnime: string): Promise<TAnimeDetails>;
}