

export type TAnimeRecents = {
  title: string;
  image: string,
  rating: string,
  url: string
}

export interface IHomeWebsiteRequest {
  animesRecents(): Promise<TAnimeRecents>;
  latestEpisodes(): Promise<void>;
  animesList(): Promise<void>;
  list(): Promise<void>;
}