import apiservise from './api-servise';
import refs from './refs';
import fetchSucsess from './fetchSucsess';

const dropDownMenu = event => {
  apiservise.resetPage();
  if (event.target.nodeName !== 'A') {
    return;
  }
  const categoriesValue = event.target.dataset.value;
  refs.cardsList.innerHTML = '';
  apiservise.categoriesNews(categoriesValue).then(articles => {
    fetchSucsess(articles);
    console.log(apiservise.articlesBase);
  });
};

export default dropDownMenu;
