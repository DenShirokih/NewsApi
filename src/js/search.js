import apiservise from './api-servise';
import refs from './refs';
import dropDownMenu from './drop-down-menu';
import fetchSucsess from './fetchSucsess';
import scrollUp from './scroll-up';

const submitForm = event => {
  event.preventDefault();
  const form = event.currentTarget;
  apiservise.query = form.elements.searchQuery.value;
  apiservise
    .NewsSearch()
    .then(fetchSucsess)
  refs.cardsList.innerHTML = '';
};

const loadTrendingNews = () => {
  refs.cardsList.innerHTML = '';
  apiservise.TrendingNews().then(fetchSucsess);
};

refs.dropDownMenu.addEventListener('click', dropDownMenu);
refs.searchForm.addEventListener('submit', submitForm);
refs.trendingNewsBtn.addEventListener('click', loadTrendingNews);
loadTrendingNews();
