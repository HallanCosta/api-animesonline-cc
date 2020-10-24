export type TAnime = {
  name: string;
  image: string,
  rating: string,
  idAnime: string
}

export type TEpisode = {
  name: string;
  thumbnail: string,
  subtitled: string,
  idEpisode: string
}

export interface IHomeWebsiteRequest {
  request(): Promise<void>;
}