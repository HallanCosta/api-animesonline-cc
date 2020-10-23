export type TAnime = {
  title: string;
  image: string,
  rating: string,
  url: string
}

export type TEpisode = {
  title: string;
  thumbnail: string,
  subtitled: string,
  url: string
}

export interface IHomeWebsiteRequest {
  request(): Promise<void>;
}