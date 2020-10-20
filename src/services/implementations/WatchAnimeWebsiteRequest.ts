import puppeteer from 'puppeteer';
import path from 'path';

export class WatchAnimeWebsiteRequest {
  async config() {
    const browser = await puppeteer.launch({
      executablePath: path.join("/", "mnt", "c", "Program Files (x86)", "Microsoft", "Edge", "Application", "msedge.exe"),
      headless: false
    });

    const page = await browser.newPage();

    await page.goto('https://animesonline.cc/episodio/');

    return {
      browser,
      page
    };
  }

  async list(idEpisode: string) {
    console.log('WatchAnimeWebsiteRequest');
    console.log(idEpisode);
    // const { browser, page } = await this.config();

    // await page.evaluate(() => {

    // });

    // await browser.close();
  }
}