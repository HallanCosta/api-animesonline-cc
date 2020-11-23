import puppeteer, { Page } from 'puppeteer';
import path from 'path';
import { TGenre } from '../IGenresWebsiteRequest';
import { launchConfig } from '../../common/utils/PuppeteerLaunch/PuppeteerLaunch';

export class GenresWebsiteRequest {
  async request(): Promise<TGenre[]> {
    const browser = await puppeteer.launch(launchConfig);

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