import puppeteer from 'puppeteer';
import path from 'path';

import { Animes } from '../../common/utils/Animes';

export class ListAnimesWebsiteRequest {
  async request() {
    const browser = await puppeteer.launch({
      // executablePath: path.join("/", "mnt", "c", "Program Files (x86)", "Microsoft", "Edge", "Application", "msedge.exe"),
      executablePath: path.join("/", "mnt", "c", "chrome-win", "chrome.exe"),
      headless: false
    });

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