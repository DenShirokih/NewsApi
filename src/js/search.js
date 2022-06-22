import apiservise from './api-servise';
import refs from './refs';
import dropDownMenu from './drop-down-menu';
import fetchSucsess from './fetchSucsess';
import scrollUp from './scroll-up';
import { visibleReset, clearForm } from './clear-input';
import { fullPage } from './full-articles';
import { searchKeyWords } from './fined-keywords';
import itemCard from '../templates/item-card.hbs?raw';
import createCardNews from './news-markup';

const submitForm = event => {
  apiservise.resetPage();
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
  apiservise.resetPage();
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

const onEntry = entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !apiservise.isLoading) {
      refs.spinner.classList.remove('is-hidden');
      apiservise
        .categoriesNews('general')
        .then(articles => {
          createCardNews(itemCard, articles);
        })
        .finally(() => {
          refs.spinner.classList.add('is-hidden');
        });
    }
  });
};
const options = {
  rootMargin: '400px',
};
const io = new IntersectionObserver(onEntry, options);
io.observe(refs.observerDiv);

refs.dropDownMenu.addEventListener('click', dropDownMenu);
refs.searchForm.addEventListener('submit', submitForm);
refs.trendingNewsBtn.addEventListener('click', loadTrendingNews);
refs.logoOpenBtn.addEventListener('click', loadTrendingNews);
refs.clearInput.addEventListener('click', clearForm);
refs.searchBtn.addEventListener('click', searchKeyWords);
refs.searchInput.addEventListener('click', visibleReset);
refs.cardsList.addEventListener('click', fullPage);
loadTrendingNews();
