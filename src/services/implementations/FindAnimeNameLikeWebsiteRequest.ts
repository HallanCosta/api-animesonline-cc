import puppeteer, { Page } from 'puppeteer';

import { TAnimesFinded } from '../IFindAnimeNameLikeWebsiteRequest';
import { Animes } from '../../common/utils/Animes/Animes';
import { launchConfig } from '../../common/utils/PuppeteerLaunch/PuppeteerLaunch';

export class FindAnimeNameLikeWebsiteRequest {
  async request(name: string): Promise<TAnimesFinded> {
    const browser = await puppeteer.launch(launchConfig);

    const page = await browser.newPage();

    await page.goto(`https://animesonline.cc/search/${name}`);

    const search = await this.WhatWasSearch(page);

    const animes = new Animes;
    const animesFinded = await animes.listAnimes(page);
    const totalPage = await animes.totalPage(page);
    
    await browser.close();

    return {
      search,
      animesFinded,
      totalPage
    };
  }

  async WhatWasSearch(page: Page) {
    const search = await page.evaluate(() => {
      const { innerText: search } = document.querySelector('div.content > header > h1') as HTMLElement;
      
      console.log('Search:', search);

      return search;
    });
    return search;
  }

}