import axios from 'axios';
import dayjs from 'dayjs';
import refs from './refs';
axios.defaults.baseURL = 'https://newsapi.org/v2/';
const KEY = '40e6c2e8a4634fe2a853fc33b21167f5';

const EXCLUDEDOMAINS =
  'excludeDomains=pikabu.ru,news2.ru,smotrim.ru,sputniknews.com,news.google.com,klops.ru,shakin.ru,cnews.ru,sportmail.ru,seonews.ru,mail.ru,yandex.ru,life.ru,kommersant.ru,tass.ru,vesti.ru,ixbt.com,gazeta.ru,exler.ru,news.pn,lenta.ru,rg.ru,vz.ru,meduza.io,livejournal.com,vedomosti.ru,techinsider.ru';
export default {
  articlesBase: [],
  addToBase(articles) {
    this.articlesBase =
      this.page === 1 ? articles : [...this.articlesBase, ...articles];
  },
  searchArt: '',
  page: 1,
  isLoading: false,
  newsSearch() {
    this.isLoading = true;
    const filter = `everything?${EXCLUDEDOMAINS}&q=${this.query}&pageSize=7
    &page=${this.page}&searchIn=title,description&sortBy=publishedAt&apiKey=${KEY}`;
    return axios
      .get(`${filter}`)
      .then(articles => {
        this.page += 1;
        const newArticles = createDate(articles);
        this.addToBase(newArticles);
        return newArticles;
      })
      .finally(() => {
        this.isLoading = false;
      });
  },
  categoriesNews(nameCategory) {
    this.isLoading = true;
    refs.spinner.classList.remove('is-hidden');
    const filterNews = `top-headlines?country=ua&category=${nameCategory}&apiKey=${KEY}&pageSize=7&page=${this.page}`;
    return axios
      .get(`${filterNews}`)
      .then(articles => {
        this.page += 1;
        const newArticles = createDate(articles);
        this.addToBase(newArticles);
        return newArticles;
      })
      .finally(() => {
        console.log(this.articlesBase);
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

export { createDate };
