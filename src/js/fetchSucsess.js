import createCardNews from './news-markup';
import primaryCard from '../templates/primary-card.hbs?raw';
import itemCard from '../templates/item-card.hbs?raw';

const fetchSucsess = articles => {
  const arr = articles.slice(1);
  createCardNews(primaryCard, articles[0]);
  createCardNews(itemCard, arr);
};
export default fetchSucsess;
