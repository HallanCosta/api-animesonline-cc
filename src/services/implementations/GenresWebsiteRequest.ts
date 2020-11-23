import puppeteer, { Page } from 'puppeteer';
import path from 'path';
import { TGenre } from '../IGenresWebsiteRequest';
export class GenresWebsiteRequest {
  async request(): Promise<TGenre[]> {
    const browser = await puppeteer.launch({
      // executablePath: path.join("/", "mnt", "c", "Program Files (x86)", "Microsoft", "Edge", "Application", "msedge.exe"),
      executablePath: path.join("/", "mnt", "c", "chrome-win", "chrome.exe"),
      headless: true,
      args: ["--no-sandbox"]
    });

    const page = await browser.newPage();

    await page.goto('https://animesonline.cc/generos/');

    const genres = await this.listGenres(page);

    await browser.close();

    return genres;
  }

  async listGenres(page: Page) {
    const genres = await page.evaluate(() => {
      const genresNodeList: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('p > a'); 

      const genresArray = [...genresNodeList];

      const genresURLExpression = /[\/]/g
      const genres = genresArray.map(({ href: url, innerText: name }) => {
        const genresSplit = url.split(genresURLExpression);
        const idGenre = genresSplit[4].trim();

        return ({
          idGenre,
          name
        });
      });

      genres.push(
        {
          idGenre: 'dublado',
          name: 'Dublado'
        },
        {
          idGenre: 'legendado',
          name: 'Legendado'
        }
      );

      return genres;
    });

    return genres;
  }
}