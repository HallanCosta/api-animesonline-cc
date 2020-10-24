import puppeteer, { Browser, Page } from 'puppeteer';
import path from 'path';
import { TAnimeEpisode } from '../IWatchAnimeWebsiteRequest';

export class WatchAnimeWebsiteRequest {

  async request(idEpisode: string) {
    const browser = await puppeteer.launch({
      // executablePath: path.join("/", "mnt", "c", "Program Files (x86)", "Microsoft", "Edge", "Application", "msedge.exe"),
      executablePath: path.join("/", "mnt", "c", "chrome-win", "chrome.exe"),
      headless: false
    });

    const page = await browser.newPage();

    await page.goto(`https://animesonline.cc/episodio/${idEpisode}`);

    const watchAnime = await this.watchAnime(page);

    await browser.close();

    return watchAnime;
  }

  async watchAnime(page: Page): Promise<TAnimeEpisode> {

    const episode = await page.evaluate(async () => {
      //sem dublagem url: https://animesonline.cc/episodio/senyoku-no-sigrdrifa-episodio-2/
      //com dublagem url: https://animesonline.cc/episodio/darling-in-the-franxx-episodio-1/
      
      let animesURL = undefined;
      const animesURLIframe: NodeListOf<HTMLIFrameElement> = document.querySelectorAll('iframe.metaframe.rptss');
      const animeURLIframeArray: HTMLIFrameElement[] = [...animesURLIframe];
      
      const animesURLDubbedSubtitled = animeURLIframeArray.map(anime => ({
        src: anime.src
      }));

      if (animeURLIframeArray[1]) {
        animesURL = {
          dubbed: animesURLDubbedSubtitled[0],
          subtitled: animesURLDubbedSubtitled[1]
        }
      } else {
        animesURL = {
          subtitled: animesURLDubbedSubtitled[0]
        }
      }

      const title = document.querySelector('.epih1')?.innerHTML;
      const description = document.querySelector('#info p')?.innerHTML;
      const { src: imageDescription } = document.querySelector('.imgep img') as HTMLImageElement;
      const { href: episodesAnimeURL } = document.querySelector('.areaserie a') as HTMLAnchorElement;
      const episodesAnimeURLText = document.querySelector('.areaserie a')?.innerHTML;

      console.log({
        animesURL,
        title,
        description,
        imageDescription,
        episodesAnimeURL,
        episodesAnimeURLText
      });

      return {
        animesURL,
        title,
        description,
        imageDescription,
        episodesAnimeURL,
        episodesAnimeURLText
      }

    });

    return episode as TAnimeEpisode;
  }
}