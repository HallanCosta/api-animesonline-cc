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

    const findAnimeNameLike = await this.findAnimeNameLike(page);

    await browser.close();

    return findAnimeNameLike;
  }

  async findAnimeNameLike(page: Page) {
    const animesFineded = await page.evaluate(() => {
      const { innerText: search } = document.querySelector('div.content > header > h1') as HTMLElement;

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

      return { search, animesFinded };
    });

    return animesFineded;
  }


}