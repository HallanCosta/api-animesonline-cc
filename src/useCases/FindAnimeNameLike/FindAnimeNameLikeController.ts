import { FindAnimeNameLikeUseCase } from './FindAnimeNameLikeUseCase';
import { Request, Response } from 'express';

export class FindAnimeNameLikeController {
  constructor(
    private findAnimeNameLikeUseCase: FindAnimeNameLikeUseCase
  ) {}

  async handle(request: Request, response: Response) {
    const { name, currentPage } = request.params;

    try {
      const findAnimes = await this.findAnimeNameLikeUseCase.execute({ name, currentPage });
      
      return response.status(200).json(findAnimes);
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      });
    }
  }
}