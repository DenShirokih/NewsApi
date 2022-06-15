import refs from './refs';

const scrollUp = () => {
    window.scrollTo({
    top: 10,
    behavior: "smooth"
  })
}
refs.scrollUpBtn.addEventListener('click', scrollUp);
export default scrollUp;