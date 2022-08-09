const APP_PAGES = {
  homePage: 'home-page',
  newsDetails: 'news-details',
};
const pageService = {
  currentPage: APP_PAGES.homePage,

  setCurrentPage(pageName) {
    this.currentPage = pageName;
  },

  getIsHomePage() {
    return this.currentPage === APP_PAGES.homePage;
  },
};
export { APP_PAGES, pageService };
