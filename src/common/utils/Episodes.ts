import { Page } from 'puppeteer';
import { TEpisode } from './TEpisodes';

export class Episodes {
  async listEpisodes(page: Page): Promise<TEpisode[]> {
    const listEpisodes = await page.evaluate(() => {
      
      const anchorsNodeList: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('.episodes > .poster > a');
      const thumbnailsNodeList: NodeListOf<HTMLImageElement> = document.querySelectorAll('.episodes > .poster > a > img');
      const subtitledNodeList: NodeListOf<HTMLDivElement> = document.querySelectorAll('.episodes > .poster > .quality');
      const namesNodeList: NodeListOf<HTMLElement> = document.querySelectorAll('.episodes > .eptitle > h3 > a');

      const anchorsArray = [...anchorsNodeList];
      const thumbnailsArray = [...thumbnailsNodeList];
      const subtitledArray = [...subtitledNodeList];
      const namesArray = [...namesNodeList];

      const episodesURLExpression = /[\/]/g
      const idEpisodes = anchorsArray.map(({ href: url }) => {
        const idEpisodeSplit = url.split(episodesURLExpression);
        const idEpisode = idEpisodeSplit[4].trim();
        
        return({
          idEpisode
        });
      });
 
      const thumbnails = thumbnailsArray.map(({ src: thumbnail }) => ({
        thumbnail
      }));
      
      const subtitleds = subtitledArray.map(({ innerText: subtitled }) => ({
        subtitled
      }));

      const names = namesArray.map(({ innerText: name }) => ({
        name
      }));

      const episodes = idEpisodes.map(({ idEpisode }, index) => ({
        idEpisode,
        name: names[index].name,
        thumbnail: thumbnails[index].thumbnail,
        subtitled: subtitleds[index].subtitled,
      }));

      console.log('Episódios >');
      console.log(episodes);

      return episodes;
    });
    
    return listEpisodes;
  }

  async totalPage(page: Page): Promise<string> {
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