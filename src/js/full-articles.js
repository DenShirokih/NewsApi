import apiservise from './api-servise';
import refs from './refs';
import createCardNews from './news-markup';
import openedCard from '../templates/opened-article.hbs?raw';
import { APP_PAGES, pageService } from './actual-page';
 
const fullPage = event => {
  const elements = event.path.find(element =>
    [...element.classList].includes('js-article-card'),
  );
  const datasetTitle = elements.dataset.title;
  const needArticles = apiservise.articlesBase.find(
    articles => articles.title === datasetTitle,
  );
  refs.cardsList.innerHTML = '';
  createCardNews(openedCard, needArticles);
  pageService.setCurrentPage(APP_PAGES.newsDetails);
};

export { fullPage };
