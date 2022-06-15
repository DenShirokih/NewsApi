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
      apiservise.SportNews().then(fetchSucsess);
      break;
    case 'health':
      refs.cardsList.innerHTML = '';
      apiservise.HealthNews().then(fetchSucsess);
      break;
    case 'general':
      refs.cardsList.innerHTML = '';
      apiservise.GeneralNews().then(fetchSucsess);
      break;
    case 'business':
      refs.cardsList.innerHTML = '';
      apiservise.BusinessNews().then(fetchSucsess);
      break;
    case 'science':
      refs.cardsList.innerHTML = '';
      apiservise.ScienceNews().then(fetchSucsess);
      break;
    case 'technology':
      refs.cardsList.innerHTML = '';
      apiservise.TechnologyNews().then(fetchSucsess);
      break;
    case 'entertainment':
      refs.cardsList.innerHTML = '';
      apiservise.EntertainmentNews().then(fetchSucsess);
      break;
  }
};

export default dropDownMenu;
