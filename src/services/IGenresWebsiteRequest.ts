export type TGenre = {
  idGenre: string;
  name: string;
}

export interface IGenresWebsiteRequest {
  request(): Promise<TGenre[]>;
}