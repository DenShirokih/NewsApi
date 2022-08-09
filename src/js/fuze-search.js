import Fuse from 'fuse.js';
import refs from './refs';
import { APP_PAGES, pageService } from './actual-page';
import {arrWords} from './list-for-fuse-search';

const options = {
    includeScore: true,
};

const fuse = new Fuse(arrWords.map(keys => keys.key), options);

function fuzzyInput() {
    if (pageService.getIsHomePage()) {
        const results = fuse.search(refs.searchInput.value);
        const itemResult = results.map(result =>`<li class = "fuze__link">${result.item}</li>`)
        if (itemResult.length > 1) {
            refs.listSearch.classList.remove('is-hidden');
            refs.listSearch.innerHTML = itemResult.join('');
        }
        else {
            refs.listSearch.classList.add('is-hidden');
        }
    } 
    else {
        refs.listSearch.classList.add('is-hidden');
    }
};
    export { fuzzyInput };