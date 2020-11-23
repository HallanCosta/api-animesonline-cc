import puppeteer, { Page } from 'puppeteer';
import path from 'path';
import { TAnimeDetails, TAnimesRelated, TPopularAnimes, TRequestAnimeDetails, TSeasonsEpisodesAnime } from '../IAnimeDetailsWebsiteRequest';

export class AnimeDetailsWebsiteRequest {

  async request(idAnime: string): Promise<TRequestAnimeDetails> {
    const browser = await puppeteer.launch({
      // executablePath: path.join("/", "mnt", "c", "Program Files (x86)", "Microsoft", "Edge", "Application", "msedge.exe"),
      executablePath: path.join("/", "mnt", "c", "chrome-win", "chrome.exe"),
      headless: true,
      args: ["--no-sandbox"]
    });

    const page = await browser.newPage();

    await page.goto(`https://animesonline.cc/anime/${idAnime}`);

    const animeDetails = await this.animeDetails(page);
    const seasonsEpisodesAnime = await this.seasonsEpisodesAnime(page);
    const animesRelated = await this.animesRelated(page);
    const popularAnimes = await this.popularAnimes(page);
    
    await browser.close();

    const anime = {
      animeDetails,
      seasonsEpisodesAnime,
      animesRelated,
      popularAnimes
    };

    return anime;
  }

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

      console.log('Anime Details >');
      console.log(animeDetails);

      return animeDetails;
    });

    return animeDetails;
  }

  async seasonsEpisodesAnime(page: Page): Promise<TSeasonsEpisodesAnime[]> {

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
        
        const episodesURLExpression = /[\/]/g
        const episodes = episodesArray.map((episode) => {
          const idEpisodeSplit = String(episode.children[0].children[0].attributes[0].nodeValue).split(episodesURLExpression);
          const idEpisode = idEpisodeSplit[4].trim();

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

      console.log('Seasons Episodes >');
      console.log(seasonsEpisodes);

      return seasonsEpisodes;

    });

    return seasonsEpisodesAnime as TSeasonsEpisodesAnime[];
  }

  async animesRelated(page: Page): Promise<TAnimesRelated[]> {
    
    const animesRelated = await page.evaluate(() => {
      const anchorsNodeList: NodeListOf<HTMLAnchorElement> = document
        .querySelectorAll('div.owl-item > article > a');

      const imagesNodeList: NodeListOf<HTMLImageElement> = document
        .querySelectorAll('div.owl-item > article > a > img');

      const anchorsArray = [...anchorsNodeList];
      const imagesArray = [...imagesNodeList];

      const animesURLExpression = /[\/]/g
      const idAnimes = anchorsArray.map(({ href: url }) => {
        const idAnimeSplit = url.split(animesURLExpression);
        const idAnime = idAnimeSplit[4].trim();

        return ({
          idAnime
        });
      });

      const images = imagesArray.map(image => ({
        image: image.src
      }));

      const names = imagesArray.map(image => ({
        name: image.alt
      }));

      const animesRelated = idAnimes.map((anime, index) => ({
        idAnime: anime.idAnime,
        image: images[index].image,
        name: names[index].name
      }));

      console.log('Animes Related >');
      console.log(animesRelated);

      return animesRelated;
    });

    return animesRelated
  }

  async popularAnimes(page: Page): Promise<TPopularAnimes[]> {
    const popularAnimes = await page.evaluate(() => {
      const anchorsNodeList: NodeListOf<HTMLAnchorElement> = document
        .querySelectorAll('article.w_item_b > a');
      const imagesNodeList: NodeListOf<HTMLImageElement> = document
        .querySelectorAll('article.w_item_b > a > div.image > img');
      
        const namesNodeList: NodeListOf<HTMLElement> = document
        .querySelectorAll('article.w_item_b > a > div.data > h3');
      
      const datesNodeList: NodeListOf<HTMLSpanElement> = document
        .querySelectorAll('article.w_item_b > a > div.data > span.wdate');
      
      const ratingsNodeList: NodeListOf<HTMLElement> = document
        .querySelectorAll('article.w_item_b > a > div.data > span.wextra > b');
    
      const anchorsArray = [...anchorsNodeList];
      const imagesArray = [...imagesNodeList];
      const namesArray = [...namesNodeList];
      const datesArray = [...datesNodeList];
      const ratingsArray = [...ratingsNodeList];

      const animesURLExpression = /[\/]/g
      const idAnimes = anchorsArray.map(({ href: url }) => {
        const idAnimeSplit = url.split(animesURLExpression);
        const idAnime = idAnimeSplit[4].trim();

        return ({
          idAnime
        });
      });

      const images = imagesArray.map(({ src: image }) => ({
        image
      }));

      const names = namesArray.map(({ innerText: name }) => ({
        name
      }));

      const dates = datesArray.map(({ innerText: date }) => ({
        date
      }));

      const ratings = ratingsArray.map(({ innerText: rating }) => ({
        rating
      }));

      const popularAnimes = idAnimes.map((anime, index) => ({
        idAnime: anime.idAnime,
        image: images[index].image,
        name: names[index].name,
        date: dates[index].date,
        rating: ratings[index].rating
      }));

      console.log('Popuplar Animes >');
      console.log(popularAnimes);

      return popularAnimes;
    });

    return popularAnimes;
  }

  

}