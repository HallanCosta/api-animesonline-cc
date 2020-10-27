import puppeteer, { Page } from 'puppeteer';
import path from 'path';
import { TAnimeDetails, TSeasonEpisodesAnime } from '../IAnimeDetailsWebsiteRequest';

export class AnimeDetailsWebsiteRequest {

  async request(idAnime: string) {

    const browser = await puppeteer.launch({
      // executablePath: path.join("/", "mnt", "c", "Program Files (x86)", "Microsoft", "Edge", "Application", "msedge.exe"),
      executablePath: path.join("/", "mnt", "c", "chrome-win", "chrome.exe"),
      headless: false
    });

    const page = await browser.newPage();

    await page.goto(`https://animesonline.cc/anime/${idAnime}`);

    // const animeDetails = await this.animeDetails(page);
    const seasonsEpisodesAnime = await this.seasonsEpisodesAnime(page);
    
    await browser.close();

    // return animeDetails;
    return seasonsEpisodesAnime;
  }

  // PEGAR O ANO QUE FOI LANÇADO O ANIME
  async animeDetails(page: Page): Promise<TAnimeDetails> {
    const animeDetails = await page.evaluate(() => {
      const { innerText: name } = document.querySelector('.data h1') as HTMLElement;
      const { src: image } = document.querySelector('.poster img') as HTMLImageElement;
      const { innerText: rating } = document.querySelector('span.dt_rating_vgs') as HTMLElement;
      const { innerText: synopsis } = document.querySelector('div.resumotemp p') as HTMLElement;
      const { innerText: titleListEpisodes } = document.querySelector('div.resumotemp h2') as HTMLElement;
      
      const genresURLExpression = /[\/]/g
      const genresNodeList: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('div.sgeneros a');
      const genresArray = [...genresNodeList];
      const genres = genresArray.map(({ href: url, innerText: genre }) => {
        const idGenreSplit = url.split(genresURLExpression);
        const idGenre = idGenreSplit[4].trim();

        return ({
          idGenre,
          genre
        });
      });

      const animeDetails = {
        name,
        image,
        rating,
        genres,
        synopsis,
        titleListEpisodes
      };

      console.log(animeDetails);

      return animeDetails;
    });

    return animeDetails;
  }

  async seasonsEpisodesAnime(page: Page): Promise<TSeasonEpisodesAnime[]> {

    const seasonsEpisodesAnime = await page.evaluate(() => {

      const seasonNodeList: NodeListOf<Element> = document
        .querySelectorAll('div.se-c');

      const seasonArray = [...seasonNodeList];

      const seasonsEpisodes = seasonArray.map((season, index) => {
        const numberSeason = season.children[0].children[0].innerHTML;

        const episodesNodeList = seasonNodeList[index].children[1].children[0].children;
        const episodesArray = [...episodesNodeList];

        const datesReleaseNodeList = seasonNodeList[index].children[1].children[0].children;
        const datesReleaseArray = [...datesReleaseNodeList];
        

        const episodes = episodesArray.map((episode) => {
          const idEpisode = episode.children[0].children[0].attributes[0].nodeValue;
          const image = episode.children[0].children[0].children[0].attributes[0].nodeValue;
  
          return ({
            idEpisode,
            image
          });
        });

        const datesRelease = datesReleaseArray.map(dateRelease => {
          const date = dateRelease.children[2].children[1].innerHTML;

          return ({
            date
          });
        });

        const episodesAnime = episodes.map((episode, index) => {
          const idEpisode = episode.idEpisode
          const image = episode.image
          const dateRelease = datesRelease[index].date

          return ({
            idEpisode,
            image,
            dateRelease
          });
        });

        return {
          numberSeason,
          episodesAnime
        };

      });

      console.log(seasonsEpisodes);

      return seasonsEpisodes;

    });

    return seasonsEpisodesAnime as TSeasonEpisodesAnime[];
  }

}