import apiservise from './api-servise';
import refs from './refs';
import dropDownMenu from './drop-down-menu';
import fetchSucsess from './fetchSucsess';
import scrollUp from './scroll-up';
import { visibleReset, clearForm } from './clear-input';
import { fullPage } from './full-articles';
import { searchKeyWords } from './fined-keywords';

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
    .categoriesNews('general')
    .then(articles => {
      fetchSucsess(articles);
    })
    .finally(() => {
      refs.spinner.classList.add('is-hidden');
    });
};

refs.dropDownMenu.addEventListener('click', dropDownMenu);
refs.searchForm.addEventListener('submit', submitForm);
refs.trendingNewsBtn.addEventListener('click', loadTrendingNews);
refs.logoOpenBtn.addEventListener('click', loadTrendingNews);
refs.clearInput.addEventListener('click', clearForm);
refs.searchBtn.addEventListener('click', searchKeyWords);
refs.searchInput.addEventListener('click', visibleReset);
refs.cardsList.addEventListener('click', fullPage);
loadTrendingNews();
