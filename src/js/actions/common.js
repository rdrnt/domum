import NewsHelper from '../helpers/news';

const commonActions = {
  updateNews: object => ({
    type: 'UPDATE_NEWS',
    object,
  }),

  getNews: () => (
    (dispatch) => {
      NewsHelper.get(articles => {
        dispatch(commonActions.updateNews(articles));
      });
    }
  )
};

export default commonActions;