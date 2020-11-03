import puppeteer, { Page } from 'puppeteer';
import path from 'path';
import { TAnimesFinded } from '../IFindAnimeNameLikeWebsiteRequest';

export class FindAnimeNameLikeWebsiteRequest {
  async request(name: string): Promise<TAnimesFinded> {
    const browser = await puppeteer.launch({
      // executablePath: path.join("/", "mnt", "c", "Program Files (x86)", "Microsoft", "Edge", "Application", "msedge.exe"),
      executablePath: path.join("/", "mnt", "c", "chrome-win", "chrome.exe"),
      headless: false
    });

    const page = await browser.newPage();

    await page.goto(`https://animesonline.cc/search/${name}`);

    const search = await this.WhatWasSearch(page);
    const animesFinded = await this.animesFinded(page);
    const totalPage = await this.totalPage(page);
    
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

  async animesFinded(page: Page) {
    const animesFineded = await page.evaluate(() => {

      const anchorsNodeList: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('article > div.poster > a');
      const imagesNodeList: NodeListOf<HTMLImageElement> = document.querySelectorAll('article > div.poster > a > img');
      const ratingsNodeList: NodeListOf<HTMLElement> = document.querySelectorAll('article > div.poster > div.rating');
 
      const anchorsArray = [...anchorsNodeList];
      const imagesArray = [...imagesNodeList];
      const ratingsArray = [...ratingsNodeList];

      const animesURLExpression = /[\/]/g
      const idAnimes = anchorsArray.map(({ href: url  }) => {
        const idAnimeSplit = url.split(animesURLExpression);
        const idAnime = idAnimeSplit[4].trim();

        return ({
          idAnime
        });
      });

      const images = imagesArray.map(image => ({
        image: image.src
      }));

      const ratings = ratingsArray.map(rating => ({
        rating: rating.innerText
      }));

      const animesFinded = idAnimes.map((idAnime, index) => ({
        idAnime: idAnimes[index].idAnime,
        image: images[index].image,
        rating: ratings[index].rating
      })); 
      
      console.log(animesFinded);

      return animesFinded;
    });

    return animesFineded;
  }

  async totalPage(page: Page) {
    const totalPage = await page.evaluate(() => {
      let totalPage = '1';
      const paginationSelector = document.querySelector('div.pagination > span') as HTMLSpanElement;
      
      if (paginationSelector) {
        const paginationSplit = paginationSelector.innerText.split(/[de]/g);
        totalPage = paginationSplit[2].trim();
      }

      console.log('Total pages:', totalPage);

      return totalPage;
    });

    return totalPage;
  }

  
}