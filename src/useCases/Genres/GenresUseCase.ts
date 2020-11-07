import { IGenresWebsiteRequest } from "../../services/IGenresWebsiteRequest";

export class GenresUseCase { 
  constructor(
    private genresWebsiteRequest: IGenresWebsiteRequest
  ) {}

  async execute() {
    const genres = await this.genresWebsiteRequest.request();

    return genres;
  }

}