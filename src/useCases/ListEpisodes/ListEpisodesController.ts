import { Request, Response } from 'express';
import { ListEpisodesUseCase } from './ListEpisodesUseCase';

export class ListEpisodesController {
  constructor(
    private listEpisodesUseCase: ListEpisodesUseCase
  ) {}

  async handle(request: Request, response: Response) {
    try {
      const episodes = this.listEpisodesUseCase.execute();

      return response.status(200).json(episodes);
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error'
      });
    }
  } 
}