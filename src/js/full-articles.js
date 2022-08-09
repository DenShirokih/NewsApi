import apiservise from './api-servise';
import refs from './refs';
import { openCardNews } from './news-markup';
import openedCard from '../templates/opened-article.hbs?raw';
import { APP_PAGES, pageService } from './actual-page';
import { performMark } from './fined-keywords';
import config from '../const/config';
import dayjs from 'dayjs';
import { getFromLS, setToLS } from '../helpers/ls-helper';

const fullPage = event => {
  refs.backBtn.classList.remove('is-hidden');
  const elements = event.path.find(element =>
    [...element.classList].includes('js-article-card'),
  );
  const datasetTitle = elements.dataset.title;
  const needArticles = apiservise.articlesBase.find(
    articles => articles.title === datasetTitle,
  );
  refs.cardsList.innerHTML = '';
  openCardNews(openedCard, needArticles);
  pageService.setCurrentPage(APP_PAGES.newsDetails);

  const dataFromLS = getFromLS(config.LOCAL_STORAGE_READ_NEWS_KEY) || [];
  setToLS(config.LOCAL_STORAGE_READ_NEWS_KEY, [
    ...dataFromLS,
    {
      title: datasetTitle,
      date: dayjs().format(),
    },
  ]);
};
export { fullPage };
