import { IListAnimes } from '../../services/IListAnimes';
import { TListAnimesRequestDTO } from './ListAnimesDTO';

export class ListAnimesUseCase {
  constructor(
   private listAnimes: IListAnimes 
  ) {}

  async execute(data: TListAnimesRequestDTO) {
    const animes = await this.listAnimes.request(data.currentPage);

    return animes;
  }
}