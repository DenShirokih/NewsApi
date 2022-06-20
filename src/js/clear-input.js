import refs from './refs';
const visibleReset = () => {
  refs.clearInput.classList.remove('is-hidden');
};

const clearForm = () => {
  refs.searchInput.value = '';
  if (refs.searchInput.value < 1) {
    refs.clearInput.classList.add('is-hidden');
  }
};

export { visibleReset, clearForm };
