import puppeteer, { Page } from 'puppeteer';
import path from 'path';
import { Animes } from '../../common/utils/Animes';

export class ListAnimesGenreWebsiteRequest {
  async request(idGenre: string) {
    const browser = await puppeteer.launch({
      // executablePath: path.join("/", "mnt", "c", "Program Files (x86)", "Microsoft", "Edge", "Application", "msedge.exe"),
      executablePath: path.join("/", "mnt", "c", "chrome-win", "chrome.exe"),
      headless: true,
      args: ["--no-sandbox"]
    });

    const page = await browser.newPage();

    await page.goto(`https://animesonline.cc/genero/${idGenre}`);

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