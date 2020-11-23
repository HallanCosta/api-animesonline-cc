import puppeteer, { Page } from 'puppeteer';

import { Episodes } from '../../common/utils/Episodes/Episodes';
import { TRequest } from '../IListEpisodesWebsiteRequest';
import { launchConfig } from '../../common/utils/PuppeteerLaunch/PuppeteerLaunch';

export class ListEpisodesWebsiteRequest {
  async request(): Promise<TRequest> {
    const browser = await puppeteer.launch(launchConfig);

    const page = await browser.newPage();

    await page.goto(`https://animesonline.cc/episodio/`);
    
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