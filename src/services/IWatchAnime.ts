type TAnimesURL = {
  dubbed: {
    src: string
  };
  subtitled: {
    src: string;
  };
} 

type TAnimeURL = {
  subtitled: {
    src: string;
  };
} 

export type TAnimeEpisode = {
  animesURL: TAnimesURL | TAnimeURL;
  title: string;
  description: string;
  imageDescription: string;
  episodesAnimeURL: string;
  episodesAnimeURLText: string;
}

export interface IWatchAnime {
  request(idEpisode: string): Promise<TAnimeEpisode>;
}