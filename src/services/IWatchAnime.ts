type TVideos = {
  dubbed: string;
  subtitled: string;
} 

type TVideo = {
  subtitled: string;
} 

export type TAnimeEpisode = {
  idVideo: TVideos | TVideo;
  title: string;
  description: string;
  imageDescription: string;
  idAnimeForText: string;
  idAnime: string;
}

export interface IWatchAnime {
  request(idEpisode: string): Promise<TAnimeEpisode>;
}