import { Request, Response } from 'express';
import { WatchAnimeUseCase } from './WatchAnimeUseCase';

export class WatchAnimeController {
  constructor(
    private watchAnimeUseCase: WatchAnimeUseCase
  ) {}

  async handle(request: Request, response: Response) {
    const { idEpisode } = request.params;

    try {
      await this.watchAnimeUseCase.execute({idEpisode});

      return response.status(200).json({
        message: 'RequestWatchAnimeController'
      });
    } catch(err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error'
      })
    }
  }
}