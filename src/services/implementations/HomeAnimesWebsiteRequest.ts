import puppeteer, { Browser, Page } from 'puppeteer';
import path from 'path';
import { TAnime, TEpisode } from '../IHomeWebsiteRequest';

export class HomeAnimesWebsiteRequest {

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
    const { browser, page } = await this.config();

    const sectionAnimesRecents = await this.animesRecents(browser, page);
    const sectionLatestEpisodes = await this.latestEpisodes(browser, page);
    const sectionAnimesList = await this.animesList(browser, page);

    await browser.close();

    return {
      sectionAnimesRecents,
      sectionLatestEpisodes,
      sectionAnimesList
    }
  }

  async animesRecents(browser: Browser, page: Page): Promise<TAnime[]> {

    const animesSerialized = await page.evaluate(() => {
      const sectionAnimes = document.querySelectorAll('.owl-wrapper');
      
      const sectionAnimesRecentsPosterArchor: NodeListOf<HTMLAnchorElement> = sectionAnimes[0]
        .querySelectorAll('article .poster a');
      const sectionAnimesRecentsPosterImg: NodeListOf<HTMLImageElement> = sectionAnimes[0]
        .querySelectorAll('article .poster img');
      const sectionAnimesRecentsPosterRating: NodeListOf<HTMLDivElement> = sectionAnimes[0]
        .querySelectorAll('article .poster .rating');
      const sectionAnimesRecentsDataTitle: NodeListOf<HTMLDivElement> = sectionAnimes[0]
        .querySelectorAll('article .data a');

      const sectionAnimesRecentsPosterArchorArray = [...sectionAnimesRecentsPosterArchor];
      const sectionAnimesRecentsPosterImgArray = [...sectionAnimesRecentsPosterImg];
      const sectionAnimesRecentsPosterRatingsArray = [...sectionAnimesRecentsPosterRating];
      const sectionAnimesRecentsDataTitlesArray = [...sectionAnimesRecentsDataTitle];
      
      const animesURLExpression = /[\/]/g
      const anchors = sectionAnimesRecentsPosterArchorArray.map(archor => ({
        href: archor.href
      }));

      const anchorsSerialized = anchors.map(url => {
        const idAnimeSplit = url.href.split(animesURLExpression);
        const idAnime = idAnimeSplit[4].trim();
        
        return({
          idAnime
        });
      });
 
      const images = sectionAnimesRecentsPosterImgArray.map(img => ({
        src: img.src,
        alt: img.alt
      }));
      
      const ratings = sectionAnimesRecentsPosterRatingsArray.map(rating => ({
        rating: rating.innerText
      }));

      const names = sectionAnimesRecentsDataTitlesArray.map(name => ({
        name: name.innerText
      }));

      const animes = names.map(({name}, index) => ({
        name,  
        image: images[index].src,
        rating: ratings[index].rating,
        idAnime: anchorsSerialized[index].idAnime
      }));

      console.log('Animes Recentes >');
      console.log(animes);

      return animes;
    });

    return animesSerialized;
  }

  async latestEpisodes(browser: Browser, page: Page): Promise<TEpisode[]> {
    // const { browser, page } = await this.config();

    const episodesSerialized = await page.evaluate(() => {
      
      const sectionEpisodesRecentsPosterArchor: NodeListOf<HTMLAnchorElement> = document
        .querySelectorAll('#blog article .poster a');
      const sectionEpisodesRecentsPosterImg: NodeListOf<HTMLImageElement> = document
        .querySelectorAll('#blog article .poster img');
      const sectionEpisodesRecentsPosterSubtitled: NodeListOf<HTMLDivElement> = document
        .querySelectorAll('#blog article .poster .quality');
      const sectionEpisodesRecentsEpisodesTitle: NodeListOf<HTMLAnchorElement> = document
        .querySelectorAll('#blog article .eptitle a');

      const sectionEpisodesRecentsPosterArchorArray = [...sectionEpisodesRecentsPosterArchor];
      const sectionEpisodesRecentsPosterImgArray = [...sectionEpisodesRecentsPosterImg];
      const sectionEpisodesRecentsPosterSubtitledArray = [...sectionEpisodesRecentsPosterSubtitled];
      const sectionEpisodesRecentsEpisodesTitleArray = [...sectionEpisodesRecentsEpisodesTitle];

      const animesURLExpression = /[\/]/g
      const anchors = sectionEpisodesRecentsPosterArchorArray.map(archor => ({
        href: archor.href
      }));

      const anchorsSerialized = anchors.map(url => {
        const idEpisodeSplit = url.href.split(animesURLExpression);
        const idEpisode = idEpisodeSplit[4].trim();
        
        return({
          idEpisode
        });
      });
 
      const thumbnails = sectionEpisodesRecentsPosterImgArray.map(img => ({
        src: img.src,
        alt: img.alt
      }));
      
      const subtitleds = sectionEpisodesRecentsPosterSubtitledArray.map(subtitled => ({
        subtitled: subtitled.innerText
      }));

      const titles = sectionEpisodesRecentsEpisodesTitleArray.map(name => ({
        name: name.innerText
      }));
      
      const episodes = titles.map(({name}, index) => ({
        name,
        thumbnail: thumbnails[index].src,
        subtitled: subtitleds[index].subtitled,
        idEpisode: anchorsSerialized[index].idEpisode
      }));

      console.log('Últimos Episódios >');
      console.log(episodes);

      return episodes;
    });
    

    return episodesSerialized;
  }

  async animesList(browser: Browser, page: Page): Promise<TAnime[]> {

    const animesSerialized = await page.evaluate(() => {
      const sectionAnimes = document.querySelectorAll('.owl-wrapper');
      
      const sectionAnimesRecentsPosterArchor: NodeListOf<HTMLAnchorElement> = sectionAnimes[1]
        .querySelectorAll('article .poster a');
      const sectionAnimesRecentsPosterImg: NodeListOf<HTMLImageElement> = sectionAnimes[1]
        .querySelectorAll('article .poster img');
      const sectionAnimesRecentsPosterRatings: NodeListOf<HTMLDivElement> = sectionAnimes[1]
        .querySelectorAll('article .poster .rating');
      const sectionAnimesRecentsDataTitles: NodeListOf<HTMLDivElement> = sectionAnimes[1]
        .querySelectorAll('article .data a');

      const sectionAnimesRecentsPosterArchorArray = [...sectionAnimesRecentsPosterArchor];
      const sectionAnimesRecentsPosterImgArray = [...sectionAnimesRecentsPosterImg];
      const sectionAnimesRecentsPosterRatingsArray = [...sectionAnimesRecentsPosterRatings];
      const sectionAnimesRecentsDataTitlesArray = [...sectionAnimesRecentsDataTitles];
      
      const animesURLExpression = /[\/]/g
      const anchors = sectionAnimesRecentsPosterArchorArray.map(archor => ({
        href: archor.href
      }));

      const anchorsSerialized = anchors.map(url => {
        const idAnimeSplit = url.href.split(animesURLExpression);
        const idAnime = idAnimeSplit[4].trim();
        
        return({
          idAnime
        });
      });
 
      const images = sectionAnimesRecentsPosterImgArray.map(img => ({
        src: img.src,
        alt: img.alt
      }));
      
      const ratings = sectionAnimesRecentsPosterRatingsArray.map(rating => ({
        rating: rating.innerText
      }));

      const names = sectionAnimesRecentsDataTitlesArray.map(name => ({
        name: name.innerText
      }));   

      const animes = names.map(({name}, index) => ({
        name,
        image: images[index].src,
        rating: ratings[index].rating,
        idAnime: anchorsSerialized[index].idAnime
      }));

      console.log('Lista de animes >');
      console.log(animes);

      return animes;
    });

    return animesSerialized;
  }
}