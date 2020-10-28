type TGenres = {
  idGenre: string,
  genre: string
}

export type TAnimeDetails = {
  name: string;
  image: string;
  rating: string;
  genres: TGenres[];
  synopsis: string;
  titleListEpisodes: string;
}

type TEpisodesAnime = {
  idEpisode: string;
  image: string;
  dateRelease: string;
}
export type TSeasonEpisodesAnime = {
  numberSeason: string;
  episodesAnime: TEpisodesAnime[];
}

export type TAnimesRelated = {
  idAnime: string;
  image: string;
  name: string;
}

export type TPopularAnimes = {
  idAnime: string;
  image: string;
  name: string;
  date: string;
  rating: string;
}

export interface IAnimeDetailsWebsiteRequest {
  // request(idAnime: string): Promise<TAnimeDetails[]>;
  // request(idAnime: string): Promise<TSeasonEpisodesAnime[]>;
  // request(idAnime: string): Promise<TAnimesRelated[]>;
  request(idAnime: string): Promise<TPopularAnimes[]>;
}