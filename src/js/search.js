import apiservise from './api-servise';
import refs from './refs';
import dropDownMenu from './drop-down-menu';
import fetchSucsess from './fetchSucsess';
import scrollUp from './scroll-up';
import { visibleReset, clearForm } from './clear-input';
import { fullPage } from './full-articles';
import { APP_PAGES, pageService } from './actual-page';
import { io } from './pagination';
import { performMark } from './fined-keywords';
import Fuse from 'fuse.js';

const list = ['Япония','Москва','Киев','Донецк','Ровно','Чернигов','Венеция'];
const options = {
  includeScore: true
}


const fuse = new Fuse(list, options)

function fuzzyInput() {
  const result = fuse.search(refs.searchInput.value);
  // console.log('results', result);
  // result.map(news => refs.listSearch.innerHTML = `<li>${news.item}</li>`);
  console.log(result.map(news => news.item));
  // refs.listSearch.innerHTML = `<li>${news.item}</li>`;
  
}

// const queryFuz = refs.searchInput.value;
// console.log(refs.searchInput);


// const result = fuse.search(refs.searchInput.value);

// console.log('results', result);



// const list = ['Japan','Moscow','Kiev','Doneck','Rivne','Chernigiv','Venice'];
 
// const searcher = new FuzzySearch(people, {
//   caseSensitive: false,
// });
// const result = searcher.search('ess');

const submitForm = event => {
  if (pageService.currentPage === APP_PAGES.homePage) {
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
  } else {
    event.preventDefault();
  }
};

const loadTrendingNews = () => {
  refs.backBtn.classList.add('is-hidden');
  clearForm();
  pageService.setCurrentPage(APP_PAGES.homePage);
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
io.observe(refs.observerDiv);

refs.dropDownMenu.addEventListener('click', dropDownMenu);
refs.searchForm.addEventListener('submit', submitForm);
refs.trendingNewsBtn.addEventListener('click', loadTrendingNews);
refs.logoOpenBtn.addEventListener('click', loadTrendingNews);
refs.clearInput.addEventListener('click', clearForm);
// refs.searchInput.addEventListener('input', performMark);
refs.searchInput.addEventListener('input', fuzzyInput);
refs.searchInput.addEventListener('click', visibleReset);
refs.cardsList.addEventListener('click', fullPage);

loadTrendingNews();
