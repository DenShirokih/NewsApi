import refs from './refs';

const scrollUp = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
refs.scrollUpBtn.addEventListener('click', scrollUp);
export default scrollUp;
