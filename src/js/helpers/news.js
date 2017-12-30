// This file is used to fetch content from reddit
// At some point we'll use the API instead of scraping, but /shrug
import PrivateKeys from './privateKeys';

class Article {
    constructor(title, desc, thumbnail) {
        this.title = title; 
        this.thumbnail = thumbnail;
        this.description = desc;
    }
}
const NewsHelper = {
    get: (callback) => {
        fetch(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${PrivateKeys.news}`)
        .then (results => {
            return results.json();
        }).then(data => {
            const articles = data.articles.map((article) => {
                return new Article(article.title, article.description, article.urlToImage);
            });
            callback(articles);
        });
    },
};

export default NewsHelper;
