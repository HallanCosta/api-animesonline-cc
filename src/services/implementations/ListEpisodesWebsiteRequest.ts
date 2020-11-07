import puppeteer, { Page } from 'puppeteer';
import path from 'path';

export class ListEpisodesWebsiteRequest {
  async request() {
    const browser = await puppeteer.launch({
      // executablePath: path.join("/", "mnt", "c", "Program Files (x86)", "Microsoft", "Edge", "Application", "msedge.exe"),
      executablePath: path.join("/", "mnt", "c", "chrome-win", "chrome.exe"),
      headless: false
    });

    const page = await browser.newPage();

    await page.goto(`https://animesonline.cc/episodio/`);
    
    const listEpisodes = await this.listEpisodes(page);
    
    await browser.close();

    return listEpisodes;
  }

  async listEpisodes(page: Page) {
    const listEpisodes = await page.evaluate(() => {
      console.log('listEpisodes');
    });

    return listEpisodes;
  }
}