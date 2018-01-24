import NewsHelper from '../helpers/news';

const commonActions = {
  updateNews: object => ({
    type: 'UPDATE_NEWS',
    object,
  }),

  getNews: () => {
    NewsHelper.get(articles => {
      
    });
  },
};

export default commonActions;