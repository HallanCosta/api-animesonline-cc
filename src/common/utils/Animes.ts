import { Page } from 'puppeteer';

export class Animes {
  async listAnimes(page: Page) {
    const animes = await page.evaluate(() => {
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

      const animes = idAnimes.map((idAnime, index) => ({
        idAnime: idAnimes[index].idAnime,
        image: images[index].image,
        rating: ratings[index].rating
      })); 
      
      console.log(animes);

      return animes;
    });

    return animes;
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