import { Request, Response } from 'express';
import { GenresUseCase } from './GenresUseCase';

export class GenresController { 
  constructor(
    private genresUseCase: GenresUseCase 
  ) {}

  async handle(request: Request, response: Response) {
    try {
      const genres = await this.genresUseCase.execute();

      return response.status(200).json(genres);
    } catch(err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      });
    }
  }
}