import NewsHelper from '../helpers/news';

const commonActions = {
  updateNews: object => ({
    type: 'UPDATE_NEWS',
    object,
  }),

  getNews: () => dispatch => {
    NewsHelper.get(articles => {
      // We want to remove 5 articles from the articles we'll display
      const filteredArticles = articles.filter((article, index) => index < 5);
      dispatch(commonActions.updateNews(filteredArticles));
    });
  },
};

export default commonActions;
