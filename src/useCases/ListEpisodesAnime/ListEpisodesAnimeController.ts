import { Request, Response } from 'express';
import { ListEpisodesAnimeUseCase } from './ListEpisodesAnimeUseCase';

export class ListEpisodesAnimeController {
  constructor(
    private listEpisodesAnimeUseCase: ListEpisodesAnimeUseCase
  ) {}

  async handle(request: Request, response: Response) {

    try {
      await this.listEpisodesAnimeUseCase.execute();

      return response.status(200).json({
        message: 'sucessf ListEpisodesAnimes'
      })
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error'
      });
    }
  }
}