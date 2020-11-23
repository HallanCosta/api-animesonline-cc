import { IGenres } from "../../services/IGenres";

export class GenresUseCase { 
  constructor(
    private genres: IGenres
  ) {}

  async execute() {
    const genres = await this.genres.request();

    return genres;
  }

}