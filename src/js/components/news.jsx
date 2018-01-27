import React from 'react';
import PropTypes from 'prop-types';

const NewsArticle = (props) => {
  const { title, thumbnail } = props;
  return (
    <div className="news__article">
      <h1 className="headline">{title}</h1>
      <img className="thumbnail" src={thumbnail} alt="" />
    </div>
  );
};

const News = (props) => {
  const { articles } = props;
  return (
    <div className="news">
      <div className="container">
        { articles.map(article => (
          <NewsArticle
            title={article.title}
            thumbnail={article.thumbnail}
            key={article.title}
          />
        ))}
      </div>
    </div>
  );
};

News.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

NewsArticle.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
};

export default News;
