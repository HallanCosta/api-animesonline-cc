import puppeteer from 'puppeteer';
import path from 'path';

export class HomeAnimesWebsiteRequest {

  async config() {
    const browser = await puppeteer.launch({
      executablePath: path.join("/", "mnt", "c", "Program Files (x86)", "Microsoft", "Edge", "Application", "msedge.exe"),
      headless: false
    });

    const page = await browser.newPage();

    await page.goto('https://animesonline.cc/tv/');

    return {
      browser,
      page
    };
  }

  

  async animesRecents() {
    const { browser, page  } = await this.config();
    
    await page.evaluate(() => {
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
      
      const animesRecentsPosterArchors = sectionAnimesRecentsPosterArchorArray.map(archor => ({
        href: archor.href
      }));
 
      const animesRecentsPosterImgs = sectionAnimesRecentsPosterImgArray.map(img => ({
        src: img.src,
        alt: img.alt
      }));
      
      const animesRecentsPosterRatings = sectionAnimesRecentsPosterRatingsArray.map(rating => ({
        score: rating.innerText
      }));

      const animesRecentsDataTitles = sectionAnimesRecentsDataTitlesArray.map(name => ({
        title: name.innerText
      }));

      console.log('Animes Recentes >');
      console.log('Links: ', animesRecentsPosterArchors);
      console.log('Images: ', animesRecentsPosterImgs);
      console.log('Scores: ', animesRecentsPosterRatings);
      console.log('AnimesTitles: ', animesRecentsDataTitles);
    });

    await browser.close();
  }

  async latestEpisodes() {
    const { browser, page } = await this.config();

    await page.evaluate(() => {
      
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


      const episodesRecentsPosterArchors = sectionEpisodesRecentsPosterArchorArray.map(archor => ({
        href: archor.href
      }));
 
      const episodesRecentsPosterImgs = sectionEpisodesRecentsPosterImgArray.map(img => ({
        src: img.src,
        alt: img.alt
      }));
      
      const episodesRecentsPosterSubtitleds = sectionEpisodesRecentsPosterSubtitledArray.map(rating => ({
        score: rating.innerText
      }));

      const episodesRecentsEpisodesTitles = sectionEpisodesRecentsEpisodesTitleArray.map(name => ({
        title: name.innerText
      }));

      console.log('Últimos Episódios >');
      console.log('Links: ', episodesRecentsPosterArchors);
      console.log('Images: ', episodesRecentsPosterImgs);
      console.log('Subtitleds: ', episodesRecentsPosterSubtitleds);
      console.log('EpisodesTitles: ', episodesRecentsEpisodesTitles);
    }); 

    await browser.close();
  }

  async animesList() {
    const { browser, page } = await this.config();

    await page.evaluate(() => {
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
      
      const animesRecentsPosterArchors = sectionAnimesRecentsPosterArchorArray.map(archor => ({
        href: archor.href
      }));
 
      const animesRecentsPosterImgs = sectionAnimesRecentsPosterImgArray.map(img => ({
        src: img.src,
        alt: img.alt
      }));
      
      const animesRecentsPosterRatings = sectionAnimesRecentsPosterRatingsArray.map(rating => ({
        score: rating.innerText
      }));

      const animesRecentsDataTitles = sectionAnimesRecentsDataTitlesArray.map(name => ({
        title: name.innerText
      }));

      console.log('Lista de Animes  >');
      console.log('Links: ', animesRecentsPosterArchors);
      console.log('Images: ', animesRecentsPosterImgs);
      console.log('Scores: ', animesRecentsPosterRatings);
      console.log('AnimesTitle: ', animesRecentsDataTitles);
    });

    await browser.close();
  }
}