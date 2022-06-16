import axios from 'axios';
import dayjs from 'dayjs'
axios.defaults.baseURL = 'https://newsapi.org/v2/';
const KEY = '42f37e3a97114a25a54e6b53dab9d050';

const EXCLUDEDOMAINS =
  'excludeDomains=news2.ru,smotrim.ru,sputniknews.com,news.google.com,klops.ru,shakin.ru,cnews.ru,sportmail.ru,seonews.ru,mail.ru,yandex.ru,life.ru,kommersant.ru,tass.ru,vesti.ru,ixbt.com,gazeta.ru,exler.ru,news.pn,lenta.ru,rg.ru,vz.ru,meduza.io,livejournal.com,vedomosti.ru,techinsider.ru';
export default {
  searchArt: '',
  page: 1,
  isLoading: false,
  NewsSearch() {
    const filter = `everything?${EXCLUDEDOMAINS}&q=${this.query}&pageSize=7
    &page=${this.page}&searchIn=title,description&sortBy=publishedAt&apiKey=${KEY}`;

    return axios
      .get(`${filter}`)
      .then(response => response.data.articles.map(article => ({ ...article, dateAfterPublication: dayjs().to(article.publishedAt) }))
      )
      .finally(() => {
        this.isLoading = false;
      });
  },
  TrendingNews() {
    const filterNews = `top-headlines?country=ua&apiKey=${KEY}&pageSize=7&page=${this.page}`;
    return axios
      .get(`${filterNews}`)
      .then(response => response.data.articles.map(article => ({ ...article, dateAfterPublication: dayjs().to(article.publishedAt) })))
      .finally(() => {
        this.isLoading = false;
      });
  },
  SportNews() {
    const filterNews = `top-headlines?country=ua&category=sports&apiKey=${KEY}&pageSize=7&page=${this.page}`;
    return axios
      .get(`${filterNews}`)
      .then(response => response.data.articles.map(article => ({ ...article, dateAfterPublication: dayjs().to(article.publishedAt) })))
      .finally(() => {
        this.isLoading = false;
      });
  },
  HealthNews() {
    const filterNews = `top-headlines?country=ua&category=health&apiKey=${KEY}&pageSize=7&page=${this.page}`;
    return axios
      .get(`${filterNews}`)
      .then(response => response.data.articles.map(article => ({ ...article, dateAfterPublication: dayjs().to(article.publishedAt) })))
      .finally(() => {
        this.isLoading = false;
      });
  },
  GeneralNews() {
    const filterNews = `top-headlines?country=ua&category=general&apiKey=${KEY}&pageSize=7&page=${this.page}`;
    return axios
      .get(`${filterNews}`)
      .then(response => response.data.articles.map(article => ({ ...article, dateAfterPublication: dayjs().to(article.publishedAt) })))
      .finally(() => {
        this.isLoading = false;
      });
  },
  BusinessNews() {
    const filterNews = `top-headlines?country=ua&category=business&apiKey=${KEY}&pageSize=7&page=${this.page}`;
    return axios
      .get(`${filterNews}`)
      .then(response => response.data.articles.map(article => ({ ...article, dateAfterPublication: dayjs().to(article.publishedAt) })))
      .finally(() => {
        this.isLoading = false;
      });
  },
  ScienceNews() {
    const filterNews = `top-headlines?country=ua&category=science&apiKey=${KEY}&pageSize=7&page=${this.page}`;
    return axios
      .get(`${filterNews}`)
      .then(response => response.data.articles.map(article => ({ ...article, dateAfterPublication: dayjs().to(article.publishedAt) })))
      .finally(() => {
        this.isLoading = false;
      });
  },
  TechnologyNews() {
    const filterNews = `top-headlines?country=ua&category=technology&apiKey=${KEY}&pageSize=7&page=${this.page}`;
    return axios
      .get(`${filterNews}`)
      .then(response => response.data.articles.map(article => ({ ...article, dateAfterPublication: dayjs().to(article.publishedAt) })))
      .finally(() => {
        this.isLoading = false;
      });
  },
  EntertainmentNews() {
    const filterNews = `top-headlines?country=ua&category=entertainment&apiKey=${KEY}&pageSize=7&page=${this.page}`;
    return axios
      .get(`${filterNews}`)
      .then(response => response.data.articles.map(article => ({ ...article, dateAfterPublication: dayjs().to(article.publishedAt) })))
      .finally(() => {
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
