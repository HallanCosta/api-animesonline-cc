import puppeteer, { Page } from 'puppeteer';
import path from 'path';
import { TAnimeDetails } from '../IAnimeDetailsWebsiteRequest';

export class AnimeDetailsWebsiteRequest {
  async config() {
    

  }

  async request(idAnime: string) {

    const browser = await puppeteer.launch({
      // executablePath: path.join("/", "mnt", "c", "Program Files (x86)", "Microsoft", "Edge", "Application", "msedge.exe"),
      executablePath: path.join("/", "mnt", "c", "chrome-win", "chrome.exe"),
      headless: false
    });

    const page = await browser.newPage();

    await page.goto(`https://animesonline.cc/anime/${idAnime}`);

    const animeDetails = await this.animeDetails(page);

    await browser.close();

    return animeDetails;
  }

  async animeDetails(page: Page): Promise<TAnimeDetails> {
    const animeDetails = await page.evaluate(() => {
      const { innerText: name } = document.querySelector('.data h1') as HTMLElement;
      const { src: image } = document.querySelector('.poster img') as HTMLImageElement;
      const { innerText: rating } = document.querySelector('span.dt_rating_vgs') as HTMLElement;
      const { innerText: synopsis } = document.querySelector('div.resumotemp p') as HTMLElement;
      const { innerText: titleListEpisodes } = document.querySelector('div.resumotemp h2') as HTMLElement;
      
      const genresURLExpression = /[\/]/g
      const genresNodeList: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('div.sgeneros a');
      const genresArray = [...genresNodeList];
      const genres = genresArray.map(({ href: url, innerText: genre }) => {
        const idGenreSplit = url.split(genresURLExpression);
        const idGenre = idGenreSplit[4].trim();

        return ({
          idGenre,
          genre
        });
      });

      const animeDetails = {
        name,
        image,
        rating,
        genres,
        synopsis,
        titleListEpisodes
      };

      console.log(animeDetails);

      return animeDetails;
    });

    return animeDetails;
  }
}