import { Request, Response } from 'express';
import { AnimeDetailsUseCase } from './AnimeDetailsUseCase';

export class AnimeDetailsController {
  constructor(
    private animeDetailsUseCase: AnimeDetailsUseCase
  ) {}

  async handle(request: Request, response: Response) {
    const { idAnime } = request.params;
    
    try {
      const animeDetails = await this.animeDetailsUseCase.execute({idAnime});

      return response.status(200).json(animeDetails);
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error'
      });
    }
  }
}