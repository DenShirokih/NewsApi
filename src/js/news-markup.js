import handlebars from 'handlebars';
import refs from './refs';

const createCardNews = (sample, value) => {
  const markup = handlebars.compile(sample)(value);
  refs.cardsList.insertAdjacentHTML('beforeend', markup);
};

const openCardNews = (sample, value) => {
  const markup = handlebars.compile(sample)(value);
  refs.openCards.insertAdjacentHTML('beforeend', markup);
};
export { createCardNews, openCardNews };
