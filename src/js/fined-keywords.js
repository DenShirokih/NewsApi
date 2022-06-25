import Mark from 'mark.js';
import refs from './refs'
import { APP_PAGES, pageService } from './actual-page';
// import {clearForm} from './clear-input'

const content = new Mark(document.querySelector('.js-content'));
function performMark() {
  if (pageService.currentPage === APP_PAGES.newsDetails) {  
    const keyword = refs.searchInput.value;
    const options = {
    accuracy: {
      value: 'partially',
      limiters: [',', '.'],
    },
    done: function (counter) { 
      if (keyword.length === 0) {
        refs.finedTotalWords.innerHTML = '';
        refs.finedTotalWords.classList.add('is-hidden');
      } else {
        refs.finedTotalWords.classList.remove('is-hidden');  
        refs.finedTotalWords.innerHTML = `<p>found : ${counter}</p>`;
      }
    },
  }; 

  content.unmark({
    done: function () {
      content.mark(keyword, options);
    },
  });
  } else { 
    refs.finedTotalWords.innerHTML = '';
    refs.finedTotalWords.classList.add('is-hidden'); 
    // pageService.currentPage !== APP_PAGES.newsDetails
  };
  };
export { performMark };