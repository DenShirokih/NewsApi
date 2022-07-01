import Fuse from 'fuse.js';
import refs from './refs';
import { APP_PAGES, pageService } from './actual-page';

const list = ['Токио','Москва','Киев','Донецк','Ровно','Чернигов','Венеция'];

const options = {
  includeScore: true
}
const fuse = new Fuse(list, options)

function fuzzyInput() {
    if (pageService.getIsHomePage()) {
        const results = fuse.search(refs.searchInput.value);
        const itemResult = results.map(result =>`<li class = "fuze__link">${result.item}</li>`)
        if (refs.searchInput.value !== '') {
            refs.listSearch.classList.remove('is-hidden');
            refs.listSearch.innerHTML = itemResult.join('');
        }
        else {
            refs.listSearch.classList.add('is-hidden');
        }
    } 
    else {
        refs.listSearch.classList.add('is-hidden');}
};
export { fuzzyInput };