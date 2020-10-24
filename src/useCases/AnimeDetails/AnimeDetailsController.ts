import { Request, Response } from 'express';
import { AnimeDetailsUseCase } from './AnimeDetailsUseCase';

export class AnimeDetailsController {
  constructor(
    private animeDetailsUseCase: AnimeDetailsUseCase
  ) {}

  async handle(request: Request, response: Response) {
    const { idAnime } = request.params;

    try {
      await this.animeDetailsUseCase.execute({idAnime});

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