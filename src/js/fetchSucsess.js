import { createCardNews } from './news-markup';
import primaryCard from '../templates/primary-card.hbs?raw';
import itemCard from '../templates/item-card.hbs?raw';
import notFound from '../templates/not-found.hbs?raw';
import refs from './refs';

const fetchSucsess = articles => {
  if (articles.length === 0) {
    createCardNews(notFound);
    refs.scrollUpBtn.classList.add('is-hidden');
  } else {
    const arr = articles.slice(1);
    createCardNews(primaryCard, articles[0]);
    createCardNews(itemCard, arr);
    refs.scrollUpBtn.classList.remove('is-hidden');
  }
};
export default fetchSucsess;
