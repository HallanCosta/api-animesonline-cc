import { Request, Response } from 'express';
import { ListEpisodesUseCase } from './ListEpisodesUseCase';

export class ListEpisodesController {
  constructor(
    private listEpisodesUseCase: ListEpisodesUseCase
  ) {}

  async handle(request: Request, response: Response) {
    const { currentPage } = request.params;

    try {
      const episodes = await this.listEpisodesUseCase.execute({ currentPage });

      return response.status(200).json(episodes);
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error'
      });
    }
  } 
}