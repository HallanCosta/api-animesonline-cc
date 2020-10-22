import { Request, Response } from 'express';
import { HomeUseCase } from './HomeUseCase';

export class HomeController {
  constructor(
    private homeUseCase: HomeUseCase
  ) {}

  async handle(request: Request, response: Response) {
    try {
      const home = await this.homeUseCase.execute();

      return response.status(200).json(home);
    } catch (err) {
      return response.json({
        message: err.message || 'Unexpected error.'
      });
    }
  }
}