import { TEpisode } from '../common/utils/Episodes/TEpisodes';

export type TListEpisodes = {
  listEpisodes: TEpisode[];
  totalPage: string;
}

export interface IListEpisodes {
  request(): Promise<TListEpisodes>;
}