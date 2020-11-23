import puppeteer, { Page } from 'puppeteer';
import path from 'path';

import { Episodes } from '../../common/utils/Episodes';
import { TRequest } from '../IListEpisodesWebsiteRequest';

export class ListEpisodesWebsiteRequest {
  async request(): Promise<TRequest> {
    const browser = await puppeteer.launch({
      // executablePath: path.join("/", "mnt", "c", "Program Files (x86)", "Microsoft", "Edge", "Application", "msedge.exe"),
      executablePath: path.join("/", "mnt", "c", "chrome-win", "chrome.exe"),
      headless: true,
      args: ["--no-sandbox"]
    });

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