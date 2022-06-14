import axios from 'axios';
axios.defaults.baseURL = 'https://newsapi.org/v2/everything?';
const KEY = '42f37e3a97114a25a54e6b53dab9d050';
export default {
  searchArt: '',
  page: 1,
  isLoading: false,
  fetchArticles() {
    const filter = `excludeDomains=news.pn,lenta.ru,rg.ru,vz.ru,meduza.io&q=${this.query}&pageSize=7
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
