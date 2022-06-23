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
    return this.currentPage === APP_PAGES.homePage
  }
};

// examples
// if (pageService.getIsHomePage()) {
//   ...
// }

// examples
pageService.setCurrentPage(APP_PAGES.newsDetails);

export {APP_PAGES,pageService}