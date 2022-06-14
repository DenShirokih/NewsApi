import axios from 'axios';
axios.defaults.baseURL = 'https://newsapi.org/v2/';
const KEY = 'e5b74ef942424359907db3fcd031473c';
const EXCLUDEDOMAINS =
  'excludeDomains=ura.news,vesti.ru,ixbt.com,gazeta.ru,exler.ru,news.pn,lenta.ru,rg.ru,vz.ru,meduza.io,livejournal.com,vedomosti.ru,techinsider.ru';
export default {
  searchArt: '',
  page: 1,
  isLoading: false,
  NewsSearch() {
    const filter = `everything?&q=${this.query}&${EXCLUDEDOMAINS}&pageSize=7
    &page=${this.page}&apiKey=${KEY}`;
    return axios
      .get(`${filter}`)
      .then(response => response.data.articles)
      .finally(() => {
        this.isLoading = false;
      });
  },
  TrenringNews() {
    const filterNews = `top-headlines?country=ua&apiKey=${KEY}&pageSize=7&page=${this.page}`;
    return axios
      .get(`${filterNews}`)
      .then(response => response.data.articles)
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
