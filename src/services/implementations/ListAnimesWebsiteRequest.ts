import puppeteer from 'puppeteer';

import { Animes } from '../../common/utils/Animes/Animes';
import { launchConfig } from '../../common/utils/PuppeteerLaunch/PuppeteerLaunch';

export class ListAnimesWebsiteRequest {
  async request() {
    const browser = await puppeteer.launch(launchConfig);

    const page = await browser.newPage();

    await page.goto(`https://animesonline.cc/anime/`);

    const animes = new Animes;
    const listAnimes = await animes.listAnimes(page);
    const totalPage = await animes.totalPage(page);
    
    await browser.close();

    return {
      listAnimes,
      totalPage
    };
  }

}