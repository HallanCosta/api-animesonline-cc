import { IGenresRequest } from "../../services/IGenres";

export class GenresUseCase { 
  constructor(
    private genresRequest: IGenresRequest
  ) {}

  async execute() {
    const genres = await this.genresRequest.request();

    return genres;
  }

}