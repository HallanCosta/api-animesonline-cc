export type TGenre = {
  idGenre: string;
  name: string;
}

export interface IGenresRequest {
  request(): Promise<TGenre[]>;
}