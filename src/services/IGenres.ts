export type TGenre = {
  idGenre: string;
  name: string;
}

export interface IGenres {
  request(): Promise<TGenre[]>;
}