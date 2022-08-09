import axios from 'axios';
import dayjs from 'dayjs';
import config from '../const/config';
import { getFromLS } from '../helpers/ls-helper';
import refs from './refs';
axios.defaults.baseURL = 'https://newsapi.org/v2/';
const KEY = '40e6c2e8a4634fe2a853fc33b21167f5';

const EXCLUDEDOMAINS =
  'excludeDomains=pikabu.ru,news2.ru,smotrim.ru,sputniknews.com,news.google.com,klops.ru,shakin.ru,cnews.ru,sportmail.ru,seonews.ru,mail.ru,yandex.ru,life.ru,kommersant.ru,tass.ru,vesti.ru,ixbt.com,gazeta.ru,exler.ru,news.pn,lenta.ru,rg.ru,vz.ru,meduza.io,livejournal.com,vedomosti.ru,techinsider.ru';
export default {
  articlesBase: [],
  addToBase(articles) {
    this.articlesBase =
      this.page === 2 ? articles : [...this.articlesBase, ...articles];
  },
  searchArt: '',
  page: 1,
  isLoading: false,
  currentRequest: '',
  setCurrentRequest({ isNewsSearch, nameCategory }) {
    this.currentRequest = isNewsSearch
      ? `everything?${EXCLUDEDOMAINS}&q=${this.query}&pageSize=7
    &searchIn=title,description&sortBy=publishedAt&apiKey=${KEY}`
      : `top-headlines?country=ua&category=${nameCategory}&apiKey=${KEY}&pageSize=7`;
  },
  callApi() {
    this.isLoading = true;
    const query = `${this.currentRequest}&page=${this.page}`;
    return axios
      .get(query)
      .then(articles => {
        this.page += 1;
        const newArticles = createDate(articles);
        this.addToBase(newArticles);
        return newArticles;
      })
      .finally(() => {
        refs.spinner.classList.add('is-hidden');
        this.isLoading = false;
      });
  },
  newsSearch() {
    this.setCurrentRequest({ isNewsSearch: true });
    return this.callApi().then(data => data);
  },
  categoriesNews(nameCategory) {
    this.setCurrentRequest({ isNewsSearch: false, nameCategory });
    return this.callApi().then(data => data);
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
  const dataFromLS = getFromLS(config.LOCAL_STORAGE_READ_NEWS_KEY) || [];

  const articlesWithNewDate = articles.map(article => {
    const savedArticle = dataFromLS.find(
      viewedNews => viewedNews.title === article.title,
    );

    return {
      ...article,
      dateAfterPublication: dayjs().to(article.publishedAt),
      isViewedAgo: savedArticle ? dayjs().to(savedArticle.date) : null,
    };
  });
  return articlesWithNewDate;
};

export { createDate };
