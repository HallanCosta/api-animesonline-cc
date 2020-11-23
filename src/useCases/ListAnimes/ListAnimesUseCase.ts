import { IListAnimes } from '../../services/IListAnimes';

export class ListAnimesUseCase {
  constructor(
   private listAnimes: IListAnimes 
  ) {}

  async execute() {
    const animes = await this.listAnimes.request();

    return animes;
  }
}