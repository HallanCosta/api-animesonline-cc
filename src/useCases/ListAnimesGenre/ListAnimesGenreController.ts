import { Request, Response } from 'express';
import { ListAnimesGenreUseCase } from './ListAnimesGenreUseCase';

export class ListAnimesGenreController {
  constructor(
    private listAnimesGenreUseCase: ListAnimesGenreUseCase
  ) {}

  async handle(request: Request, response: Response) {
    const { idGenre, currentPage } = request.params;

    try {
      const animesGenre = await this.listAnimesGenreUseCase.execute({ idGenre, currentPage });
      
      return response.status(200).json(animesGenre);
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error'
      });
    }
  }
}