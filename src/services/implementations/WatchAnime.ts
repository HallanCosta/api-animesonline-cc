import puppeteer, { Page } from 'puppeteer';

import { TAnimeEpisode } from '../IWatchAnime';
import { launchConfig } from '../../common/utils/PuppeteerLaunch/PuppeteerLaunch';

export class WatchAnime {

  async request(idEpisode: string) {
    const browser = await puppeteer.launch(launchConfig);

    const page = await browser.newPage();

    await page.goto(`https://animesonline.cc/episodio/${idEpisode}`);

    const watchAnime = await this.watchAnime(page);

    await browser.close();

    return watchAnime;
  }

  async watchAnime(page: Page): Promise<TAnimeEpisode> {

    const episode = await page.evaluate(async () => {
      
      const source1 = document.querySelector('#option-1 > video > source') as HTMLSourceElement;
      const source2 = document.querySelector('#option-2 > video > source') as HTMLSourceElement || { src: null };

      const idVideo = source2.src
      ? { dubbed: source1.src, subtitled: source2.src } 
      : { subtitled: source1.src }

      const { innerText: title } = document.querySelector('.epih1') as HTMLElement;
      const { innerText: description } = document.querySelector('#info p') as HTMLParagraphElement;
      const { src: imageDescription } = document.querySelector('.imgep img') as HTMLImageElement;
      const { href: idAnime } = document.querySelector('.areaserie a') as HTMLAnchorElement;
      const { href: idAnimeForText } = document.querySelector('.areaserie a') as HTMLAnchorElement;

      const episode = {
        idVideo,
        title,
        description,
        imageDescription,
        idAnimeForText,
        idAnime
      };

      console.log(episode);

      return episode;
    });

    return episode as TAnimeEpisode;
  }
}