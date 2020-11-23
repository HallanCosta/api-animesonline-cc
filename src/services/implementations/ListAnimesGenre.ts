import puppeteer, { Page } from 'puppeteer';

import { Animes } from '../../common/utils/Animes/Animes';
import { launchConfig } from '../../common/utils/PuppeteerLaunch/PuppeteerLaunch';

export class ListAnimesGenre {
  async request(idGenre: string, currentPage?: string) {
    const browser = await puppeteer.launch(launchConfig);

    const page = await browser.newPage();

    if (currentPage) {
      await page.goto(`https://animesonline.cc/genero/${idGenre}/page/${currentPage}`);
    } else {
      await page.goto(`https://animesonline.cc/genero/${idGenre}`);
    }
    
    const animes = new Animes;
    const title = await this.title(page);
    const listAnimesGenre = await animes.listAnimes(page);
    const totalPage = await animes.totalPage(page);
    
    await browser.close();

    return {
      title,
      listAnimesGenre,
      totalPage
    };
  }

  async title(page: Page) {
    const animesGenre = await page.evaluate(() => {
      const { innerText: title } = document.querySelector('header > h1') as HTMLElement;

      console.log(title);

      return title;
    }); 

    return animesGenre;
  }
}