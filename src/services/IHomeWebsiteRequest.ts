export type THomeAnime = {
  name: string;
  image: string,
  rating: string,
  idAnime: string
}

export type THomeEpisode = {
  name: string;
  thumbnail: string,
  subtitled: string,
  idEpisode: string
}

export interface IHomeWebsiteRequest {
  request(): Promise<void>;
}