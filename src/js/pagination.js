import apiservise from './api-servise';
import refs from './refs';
import itemCard from '../templates/item-card.hbs?raw';
import { createCardNews } from './news-markup';
import { APP_PAGES, pageService } from './actual-page';

const onEntry = entries => {
  entries.forEach(entry => {
    if (pageService.getIsHomePage()) {
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
    }
  });
};
const options = {
  rootMargin: '200px',
};
const io = new IntersectionObserver(onEntry, options);
export { io };
