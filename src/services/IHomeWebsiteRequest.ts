export interface IHomeWebsiteRequest {
  animesRecents(): Promise<void>;
  latestEpisodes(): Promise<void>;
  animesList(): Promise<void>;
}