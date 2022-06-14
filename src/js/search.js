import apiservise from './api-servise';
import refs from './refs';
import createCardNews from './news-markup';
import primaryCard from '../templates/primary-card.hbs?raw';
import itemCard from '../templates/item-card.hbs?raw';

const submitForm = event => {
  event.preventDefault();

  const form = event.currentTarget;
  apiservise.query = form.elements.searchQuery.value;
  apiservise.fetchArticles().then(fetchSucsess);
  refs.cardsList.innerHTML = '';
};
refs.searchForm.addEventListener('submit', submitForm);

const fetchSucsess = articles => {
  const arr = articles.slice(1);
  createCardNews(primaryCard, articles[0]);
  createCardNews(itemCard, arr);
};
