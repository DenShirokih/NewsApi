import refs from './refs';
import apiservise from './api-servise';
import { createCardNews } from './news-markup';
import fetchSucsess from './fetchSucsess';
import { APP_PAGES, pageService } from './actual-page';

refs.backBtn.addEventListener('click', () => {
  refs.openCards.innerHTML = '';
  pageService.setCurrentPage(APP_PAGES.homePage);
  fetchSucsess(apiservise.articlesBase);
  refs.backBtn.classList.add('is-hidden');
});
