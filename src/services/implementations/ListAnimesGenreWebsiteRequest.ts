import puppeteer, { Page } from 'puppeteer';
import path from 'path';

export class ListAnimesGenreWebsiteRequest {
  async request(idGenre: string) {
    const browser = await puppeteer.launch({
      // executablePath: path.join("/", "mnt", "c", "Program Files (x86)", "Microsoft", "Edge", "Application", "msedge.exe"),
      executablePath: path.join("/", "mnt", "c", "chrome-win", "chrome.exe"),
      headless: false
    });

    const page = await browser.newPage();

    await page.goto(`https://animesonline.cc/genero/${idGenre}`);

    const animesGenre = await this.listAnimesGenre(page);
    
    await browser.close();

    return animesGenre;
  }

  async listAnimesGenre(page: Page) {
    const animesGenre = await page.evaluate(() => {
      console.log('List animes per genre');

    }); 

    return animesGenre;
  }
}