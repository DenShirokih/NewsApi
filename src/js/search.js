import apiservise from './api-servise';
import refs from './refs';
import createCardNews from './news-markup';
import primaryCard from '../templates/primary-card.hbs?raw';
import itemCard from '../templates/item-card.hbs?raw';

const submitForm = event => {
  event.preventDefault();
  const form = event.currentTarget;
  apiservise.query = form.elements.searchQuery.value;
  apiservise.NewsSearch().then(fetchSucsess);
  refs.cardsList.innerHTML = '';
};

const fetchSucsess = articles => {
  const arr = articles.slice(1);
  createCardNews(primaryCard, articles[0]);
  createCardNews(itemCard, arr);
};
const loadTrendihgNews = () => {
  refs.cardsList.innerHTML = '';
  apiservise.TrenringNews().then(fetchSucsess);
};
refs.trendingNewsBtn.addEventListener('click', loadTrendihgNews);
refs.searchForm.addEventListener('submit', submitForm);

loadTrendihgNews();
