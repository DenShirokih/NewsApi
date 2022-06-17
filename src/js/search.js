import apiservise from './api-servise';
import refs from './refs';
import dropDownMenu from './drop-down-menu';
import fetchSucsess from './fetchSucsess';
import scrollUp from './scroll-up';

refs.spinner.classList.add('is-hidden');

const submitForm = event => {
  refs.spinner.classList.remove('is-hidden');
  event.preventDefault();
  const form = event.currentTarget;
  apiservise.query = form.elements.searchQuery.value;
  refs.cardsList.innerHTML = '';
  apiservise
    .newsSearch()
    .then(fetchSucsess)
    .finally(() => {
      refs.spinner.classList.add('is-hidden');
    });
};

const loadTrendingNews = () => {
  refs.spinner.classList.remove('is-hidden');
  refs.cardsList.innerHTML = '';
  apiservise
    .trendingNews()
    .then(fetchSucsess)
    .finally(() => {
      refs.spinner.classList.add('is-hidden');
    });
};

refs.dropDownMenu.addEventListener('click', dropDownMenu);
refs.searchForm.addEventListener('submit', submitForm);
refs.trendingNewsBtn.addEventListener('click', loadTrendingNews);
refs.logoOpenBtn.addEventListener('click', loadTrendingNews);
loadTrendingNews();

