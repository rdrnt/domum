// Helper class for getting articles

class Article {
  constructor(title, desc, thumbnail) {
    this.title = title; 
    this.thumbnail = thumbnail;
    this.description = desc;
  }
}
const NewsHelper = {
  API_KEY: process.env.REACT_APP_NEWS_API_KEY,
  get: (callback) => {
    fetch(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${NewsHelper.API_KEY}`)
      .then(results => results.json())
      .then((data) => {
        const articles = data.articles.map((article) => {
          return new Article(article.title, article.description, article.urlToImage);
        });
        callback(articles);
      });
  },
};

export default NewsHelper;
