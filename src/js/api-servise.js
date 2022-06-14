import axios from 'axios';
axios.defaults.baseURL = 'https://newsapi.org/v2/everything?';
const KEY = 'e5b74ef942424359907db3fcd031473c';
const EXCLUDEDOMAINS =
  'excludeDomains=gazeta.ru,exler.ru,news.pn,lenta.ru,rg.ru,vz.ru,meduza.io';
export default {
  searchArt: '',
  page: 1,
  isLoading: false,
  fetchArticles() {
    const filter = `&q=${this.query}&${EXCLUDEDOMAINS}&pageSize=7
    &page=4&apiKey=${KEY}`;
    return axios
      .get(`${filter}`)
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
