import handlebars from 'handlebars';
import primaryCard from '../templates/primary-card.hbs?raw';
import itemCard from '../templates/item-card.hbs?raw';
import openedCard from '../templates/opened-article.hbs?raw';
import refs from './refs';

const createCardNews = (sample, value) => {
  const markup = handlebars.compile(sample)(value);
  refs.cardsList.insertAdjacentHTML('beforeend', markup);
};

export default createCardNews;
