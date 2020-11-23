export type THomeAnime = {
  idAnime: string;
  name: string;
  image: string;
  rating: string;
}

export type THomeEpisode = {
  idEpisode: string;
  name: string;
  thumbnail: string;
  subtitled: string;
}

export type TRequestHome = {
  sectionAnimesRecents: THomeAnime[];
  sectionLatestEpisodes: THomeEpisode[];
  sectionAnimesList: THomeAnime[];
}

export interface IHome {
  request(): Promise<TRequestHome>;
}