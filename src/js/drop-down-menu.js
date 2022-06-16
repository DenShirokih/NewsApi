import apiservise from './api-servise';
import refs from './refs';
import fetchSucsess from './fetchSucsess';

const dropDownMenu = event => {
  if (event.target.nodeName !== 'A') {
    return;
  }
  const categoriesValue = event.target.dataset.value;
  switch (categoriesValue) {
    case 'sports':
      refs.cardsList.innerHTML = '';
      apiservise.sportNews().then(fetchSucsess);
      break;
    case 'health':
      refs.cardsList.innerHTML = '';
      apiservise.healthNews().then(fetchSucsess);
      break;
    case 'general':
      refs.cardsList.innerHTML = '';
      apiservise.generalNews().then(fetchSucsess);
      break;
    case 'business':
      refs.cardsList.innerHTML = '';
      apiservise.businessNews().then(fetchSucsess);
      break;
    case 'science':
      refs.cardsList.innerHTML = '';
      apiservise.scienceNews().then(fetchSucsess);
      break;
    case 'technology':
      refs.cardsList.innerHTML = '';
      apiservise.technologyNews().then(fetchSucsess);
      break;
    case 'entertainment':
      refs.cardsList.innerHTML = '';
      apiservise.entertainmentNews().then(fetchSucsess);
      break;
  }
};

export default dropDownMenu;
