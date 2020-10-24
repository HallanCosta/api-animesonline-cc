import puppeteer from 'puppeteer';
import path from 'path';

export class ListEpisodesAnimesWebsiteRequest {
  async config() {
    const browser = await puppeteer.launch({
      // executablePath: path.join("/", "mnt", "c", "Program Files (x86)", "Microsoft", "Edge", "Application", "msedge.exe"),
      executablePath: path.join("/", "mnt", "c", "chrome-win", "chrome.exe"),
      headless: false
    });

    const page = await browser.newPage();

    await page.goto('https://animesonline.cc/tv/');

    return {
      browser,
      page
    };
  }

  async request() {
    console.log('list episodes anime');

  }
}