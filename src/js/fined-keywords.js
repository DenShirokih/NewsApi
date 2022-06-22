import Mark from 'mark.js'
import refs from './refs';

const content = new Mark(document.querySelector(".js-content"));
const keywordInput = document.querySelector(".js-content-input");
function performMark() {
  const keyword = keywordInput.value;

  const options = {
    "accuracy": {
        "value": "exactly",
        "limiters": [",", "."]
    }
  };

  // const totalWord = keyword.reduce((sum, elem) => sum + elem, 0);
  content.unmark({
  	done: function(){
    	content.mark(keyword,options);
    }
  });
};
keywordInput.addEventListener("input", performMark);

const searchKeyWords = () => {
    refs.keyWordsInput.classList.remove('is-hidden');
};

refs.keyWordsInput.addEventListener('blur', () => {
  refs.keyWordsInput.classList.add('is-hidden');
});

export { searchKeyWords };

    



