import { TEpisode } from '../common/utils/TEpisodes';

export type TRequest = {
  listEpisodes: TEpisode[];
  totalPage: string;
}

export interface IListEpisodesWebsiteRequest {
  request(): Promise<TRequest>;
}