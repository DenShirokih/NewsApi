import apiservise from './api-servise';
import refs from './refs';
import fetchSucsess from './fetchSucsess';
import { clearForm } from './clear-input';

const dropDownMenu = event => {
  refs.backBtn.classList.add('is-hidden');
  clearForm();
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
