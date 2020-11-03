import { Request, Response } from 'express';
import { ListAnimesUseCase } from './ListAnimesUseCase'

export class ListAnimesController {
  constructor(
    private listAnimesUseCase: ListAnimesUseCase
  ) {}

  async handle(request: Request, response: Response) {
    try {
      const animes = await this.listAnimesUseCase.execute();

      response.status(200).json(animes);
    } catch (err) {
      response.status(400).json({
        message: err.message || "Unexpected error."
      })
    }
  }
}