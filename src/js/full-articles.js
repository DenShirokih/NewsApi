import apiservise from './api-servise';
import refs from './refs';
import { openCardNews } from './news-markup';
import openedCard from '../templates/opened-article.hbs?raw';
import { APP_PAGES, pageService } from './actual-page';
import { performMark } from './fined-keywords';

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
};
export { fullPage };
