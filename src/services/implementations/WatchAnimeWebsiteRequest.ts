import puppeteer from 'puppeteer';
import path from 'path';

export class WatchAnimeWebsiteRequest {
  async config(idEpisode: string) {
    const browser = await puppeteer.launch({
      // executablePath: path.join("/", "mnt", "c", "Program Files (x86)", "Microsoft", "Edge", "Application", "msedge.exe"),
      executablePath: path.join("/", "mnt", "c", "chrome-win", "chrome.exe"),
      headless: false
    });

    const page = await browser.newPage();

    await page.goto(`https://animesonline.cc/episodio/${idEpisode}`);

    return {
      browser,
      page
    };
  }

  async list(idEpisode: string) {
    const { browser, page } = await this.config(idEpisode);

    await page.evaluate(async () => {
      

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
          Dubbed: animesURLDubbedSubtitled[0],
          Subtitled: animesURLDubbedSubtitled[1]
        }
      } else {
        animesURL = {
          Subtitled: animesURLDubbedSubtitled[0]
        }
      }
      const title = document.querySelector('.epih1')?.innerHTML;
      const description = document.querySelector('#info p')?.innerHTML;
      const { src: imgDescription } = document.querySelector('.imgep img') as HTMLImageElement;
      const { href: allEpisodesAnimesURL } = document.querySelector('.areaserie a') as HTMLAnchorElement;
      const allEpisodesAnimesText = document.querySelector('.areaserie a')?.innerHTML;

      console.log('Animes URL: ', animesURL);
      console.log('Anime Title: ', title);
      console.log('Anime desctiption: ', description);
      console.log('Imagem anime descrição:', imgDescription);
      console.log('Todos os animes URL: ', allEpisodesAnimesURL);
      console.log('Todos os animes URL Texto: ', allEpisodesAnimesText);

    });

    await browser.close();
  }
}