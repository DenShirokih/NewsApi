import axios from 'axios';
import dayjs from 'dayjs';
import refs from './refs';
axios.defaults.baseURL = 'https://newsapi.org/v2/';
const KEY = 'e5b74ef942424359907db3fcd031473c';

const EXCLUDEDOMAINS =
  'excludeDomains=pikabu.ru,news2.ru,smotrim.ru,sputniknews.com,news.google.com,klops.ru,shakin.ru,cnews.ru,sportmail.ru,seonews.ru,mail.ru,yandex.ru,life.ru,kommersant.ru,tass.ru,vesti.ru,ixbt.com,gazeta.ru,exler.ru,news.pn,lenta.ru,rg.ru,vz.ru,meduza.io,livejournal.com,vedomosti.ru,techinsider.ru';
export default {
  searchArt: '',
  page: 1,
  isLoading: false,
  trendingNews() {
    refs.spinner.classList.remove('is-hidden');
    const filterNews = `top-headlines?country=ua&apiKey=${KEY}&pageSize=7&page=${this.page}`;
    return axios
      .get(`${filterNews}`)
      .then(createDate)
      .finally(() => {
        refs.spinner.classList.add('is-hidden');
        this.isLoading = false;
      });
  },
  newsSearch() {
    const filter = `everything?${EXCLUDEDOMAINS}&q=${this.query}&pageSize=7
    &page=${this.page}&searchIn=title,description&sortBy=publishedAt&apiKey=${KEY}`;

    return axios
      .get(`${filter}`)
      .then(createDate)
      .finally(() => {
        this.isLoading = false;
      });
  },
  sportNews() {
    refs.spinner.classList.remove('is-hidden');
    const filterNews = `top-headlines?country=ua&category=sports&apiKey=${KEY}&pageSize=7&page=${this.page}`;
    return axios
      .get(`${filterNews}`)
      .then(createDate)
      .finally(() => {
        refs.spinner.classList.add('is-hidden');
        this.isLoading = false;
      });
  },
  healthNews() {
    refs.spinner.classList.remove('is-hidden');
    const filterNews = `top-headlines?country=ua&category=health&apiKey=${KEY}&pageSize=7&page=${this.page}`;
    return axios
      .get(`${filterNews}`)
      .then(createDate)
      .finally(() => {
        refs.spinner.classList.add('is-hidden');
        this.isLoading = false;
      });
  },
  generalNews() {
    refs.spinner.classList.remove('is-hidden');
    const filterNews = `top-headlines?country=ua&category=general&apiKey=${KEY}&pageSize=7&page=${this.page}`;
    return axios
      .get(`${filterNews}`)
      .then(createDate)
      .finally(() => {
        refs.spinner.classList.add('is-hidden');
        this.isLoading = false;
      });
  },
  businessNews() {
    refs.spinner.classList.remove('is-hidden');
    const filterNews = `top-headlines?country=ua&category=business&apiKey=${KEY}&pageSize=7&page=${this.page}`;
    return axios
      .get(`${filterNews}`)
      .then(createDate)
      .finally(() => {
        refs.spinner.classList.add('is-hidden');
        this.isLoading = false;
      });
  },
  scienceNews() {
    refs.spinner.classList.remove('is-hidden');
    const filterNews = `top-headlines?country=ua&category=science&apiKey=${KEY}&pageSize=7&page=${this.page}`;
    return axios
      .get(`${filterNews}`)
      .then(createDate)
      .finally(() => {
        refs.spinner.classList.add('is-hidden');
        this.isLoading = false;
      });
  },
  technologyNews() {
    refs.spinner.classList.remove('is-hidden');
    const filterNews = `top-headlines?country=ua&category=technology&apiKey=${KEY}&pageSize=7&page=${this.page}`;
    return axios
      .get(`${filterNews}`)
      .then(createDate)
      .finally(() => {
        refs.spinner.classList.add('is-hidden');
        this.isLoading = false;
      });
  },
  entertainmentNews() {
    refs.spinner.classList.remove('is-hidden');
    const filterNews = `top-headlines?country=ua&category=entertainment&apiKey=${KEY}&pageSize=7&page=${this.page}`;
    return axios
      .get(`${filterNews}`)
      .then(createDate)
      .finally(() => {
        refs.spinner.classList.add('is-hidden');
        this.isLoading = false;
      });
  },

  resetPage() {
    this.page = 1;
  },
  get query() {
    return this.searchArt;
  },
  set query(value) {
    this.searchArt = value;
  },
};
const createDate = response => {
  const articles = response.data.articles;
  const articlesWithNewDate = articles.map(article => ({
    ...article,
    dateAfterPublication: dayjs().to(article.publishedAt),
  }));
  return articlesWithNewDate;
};
