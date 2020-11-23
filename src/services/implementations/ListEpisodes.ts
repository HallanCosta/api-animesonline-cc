import puppeteer, { Page } from 'puppeteer';

import { Episodes } from '../../common/utils/Episodes/Episodes';
import { TListEpisodes } from '../IListEpisodes';
import { launchConfig } from '../../common/utils/PuppeteerLaunch/PuppeteerLaunch';

export class ListEpisodes {
  async request(currentPage?: string): Promise<TListEpisodes> {
    const browser = await puppeteer.launch(launchConfig);

    const page = await browser.newPage();

    if (currentPage) {
      await page.goto(`https://animesonline.cc/episodio/page/${currentPage}`);
    } else {
      await page.goto(`https://animesonline.cc/episodio/`);
    }
    
    
    const episodes = new Episodes;
    const listEpisodes = await episodes.listEpisodes(page);
    const totalPage = await episodes.totalPage(page);
    
    await browser.close();

    return {
      listEpisodes,
      totalPage
    };
  }
}