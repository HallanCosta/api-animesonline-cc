import puppeteer, { Page } from 'puppeteer';
import path from 'path';

export class GenresWebsiteRequest {
  async request() {
    const browser = await puppeteer.launch({
      // executablePath: path.join("/", "mnt", "c", "Program Files (x86)", "Microsoft", "Edge", "Application", "msedge.exe"),
      executablePath: path.join("/", "mnt", "c", "chrome-win", "chrome.exe"),
      headless: false
    });

    const page = await browser.newPage();

    await page.goto('https://animesonline.cc/generos/');

    const genres = await this.listGenres(page);

    await browser.close();

    return {};
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

      console.log(genres);

      return genres;
    });

    return genres;
  }
}