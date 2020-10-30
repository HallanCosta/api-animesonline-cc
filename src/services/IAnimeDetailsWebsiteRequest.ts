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
export type TSeasonsEpisodesAnime = {
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

export type TRequestAnimeDetails = {
  animeDetails: TAnimeDetails;
  seasonsEpisodesAnime: TSeasonsEpisodesAnime[];
  animesRelated: TAnimesRelated[];
  popularAnimes: TPopularAnimes[];
}

export interface IAnimeDetailsWebsiteRequest {
  request(idAnime: string): Promise<TRequestAnimeDetails>;
}